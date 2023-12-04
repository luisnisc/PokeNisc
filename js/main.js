
var typeTranslations = {
    'normal': 'normal',
    'fighting': 'lucha',
    'flying': 'volador',
    'poison': 'veneno',
    'ground': 'tierra',
    'rock': 'roca',
    'bug': 'bicho',
    'ghost': 'fantasma',
    'steel': 'acero',
    'fire': 'fuego',
    'water': 'agua',
    'grass': 'planta',
    'electric': 'eléctrico',
    'psychic': 'psíquico',
    'ice': 'hielo',
    'dragon': 'dragón',
    'dark': 'siniestro',
    'fairy': 'hada',
    'unknown': 'desconocido',
    'shadow': 'sombra'
};
document.getElementById('pokemonForm').addEventListener('submit', function(event) {
  event.preventDefault();
  document.getElementById('weaknessesList').textContent = '';
  var pokemonName = document.getElementById('pokemonName').value;
  fetch('https://pokeapi.co/api/v2/pokemon/' + pokemonName)
    .then(response => {
      if (!response.ok) {
        throw new Error('Pokemon not found');
      }
      return response.json();
    })
    .then(data => {
      document.getElementById('pokedex').style.display = 'flex';
      document.getElementById('pokedex').classList.add('visible');
      document.body.style.justifyContent = 'flex-start';
    
      var types = data.types.map(function(type) {
        return {
          translated: typeTranslations[type.type.name],
          original: type.type.name
        };
      });
    
      document.getElementById('typesList').textContent = 'Tipo: ' + types.map(t => t.translated).join(', ');
    
      var img = document.getElementById('pokemonImage');
      if (img) {
        img.src = data.sprites.front_default;
      } else {
        img = document.createElement('img');
        img.id = 'pokemonImage';
        img.src = data.sprites.front_default;
        document.getElementById('image').appendChild(img);
      }
    
      types.forEach(function(type) {
        fetch('https://pokeapi.co/api/v2/type/' + type.original)
          .then(response => response.json())
          .then(data => {
            var weaknesses = data.damage_relations.double_damage_from.map(function(type) {
              return typeTranslations[type.name];
            });
            var li = document.createElement('li');
            li.textContent = 'Debilidades de ' + type.translated + ': ' + weaknesses.join(', ') + "\n";
            document.getElementById('weaknessesList').appendChild(li);
          })
          .catch(error => console.error('Error:', error));
      });

      // Fetch species data to get evolution chain URL
      return fetch(data.species.url);
    })
    .then(response => response.json())
    .then(data => {
      // Fetch evolution chain data
      return fetch(data.evolution_chain.url);
    })
    .then(response => response.json())
    .then(data => {
    
      let evolutionChain = document.getElementById('evolutionChain');
      evolutionChain.innerHTML = 'Cadena de evolución: <br>';

      // Display the evolution chain
let evolutions = [];
let evolutionData = data.chain;

async function getEvolutionData(evolutionData) {
  do {
    let evolutionDetails = evolutionData.evolution_details[0];
    let minLevel = evolutionDetails ? evolutionDetails.min_level : '';
    let item = evolutionDetails && evolutionDetails.item ? evolutionDetails.item.name : null;

    let response = await fetch('https://pokeapi.co/api/v2/pokemon/' + evolutionData.species.name);
    let data = await response.json();

    let img = document.createElement('img');
    img.src = data.sprites.front_default;
    img.style.width = '70px';
    img.style.height = '70px';
    img.style.verticalAlign = 'middle';

    let evolutionItem = null;
    if (item) {
      let itemResponse = await fetch('https://pokeapi.co/api/v2/item/' + item);
      let itemData = await itemResponse.json();
      evolutionItem = document.createElement('img');
      evolutionItem.src = itemData.sprites.default;
      evolutionItem.style.width = '30px';
      evolutionItem.style.height = '30px';
      evolutionItem.style.verticalAlign = 'middle';
    }

    evolutions.push({ img, minLevel, name: evolutionData.species.name, item: evolutionItem });

    evolutionData = evolutionData['evolves_to'][0];
  } while (!!evolutionData && evolutionData.hasOwnProperty('evolves_to'));
}

getEvolutionData(evolutionData).then(() => {
  evolutions.forEach((evolution, index) => {
    evolutionChain.appendChild(evolution.img);
    if (index < evolutions.length - 1) {
      if (evolutions[index + 1].item) {
        evolutionChain.appendChild(evolutions[index + 1].item);
      } else if (evolutions[index + 1].minLevel) {
        let levelSpan = document.createElement('span');
        levelSpan.textContent = ' ' + evolutions[index + 1].minLevel + ' ';
        levelSpan.style.verticalAlign = 'middle';
        evolutionChain.appendChild(levelSpan);
      }
    }
  });
  
}).catch(error => console.error(error));})
.catch(error => console.error(error));
});
