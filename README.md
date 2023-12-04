# 🚀 PokeNisc Project Documentation

## 📚 Overview
This project is a robust web application that empowers users to search for comprehensive information about a Pokemon using the PokeAPI. Users can enter the name of a Pokemon into a form, and the application will display detailed information about the Pokemon, including its types and weaknesses.

## 📐 HTML Structure

The HTML document is structured as follows:

- The `head` section: Includes links to the project's CSS file and an icon for the webpage.
- The `body` section: Contains a form where users can enter the name of a Pokemon and submit it.
- The `div` with the id `pokedex`: This is where the Pokemon's information will be displayed. It contains two `div` elements: one for the Pokemon's image (`image`) and one for the Pokemon's data (`data`). The `data` div contains two `ul` elements for listing the Pokemon's types (`typesList`) and weaknesses (`weaknessesList`).
- The `script` tag: Located at the end of the `body` section, it links to the JavaScript file that handles the form submission and fetches data from the PokeAPI.

## 🎨 CSS Styling

The CSS file (`main.css`) linked in the `head` section is responsible for styling the webpage. It defines the appearance of the form, the `pokedex` div, and the `typesList` and `weaknessesList` elements.

## 🧩 JavaScript Functionality

The JavaScript file (`main.js`) linked at the end of the `body` section handles the form submission event. When the form is submitted, it fetches data about the entered Pokemon from the PokeAPI and displays it in the `pokedex` div. It also fetches additional data about the Pokemon's types and weaknesses and displays them in the `typesList` and `weaknessesList` elements.

## 🚀 Future Improvements

Potential future improvements for this project could include:

- Adding more information about each Pokemon, such as their abilities, evolution chain, and stats.
- Adding more interactivity, such as a feature to compare different Pokemon.
- Implementing a feature to save favorite Pokemon for easy access in the future.
- Enhancing the UI/UX design for a more engaging user experience.

## Conclusion

This project is a simple but effective demonstration of how to use HTML, CSS, and JavaScript together to create a dynamic web application that interacts with an API.

# JavaScript Code Explanation

The JavaScript file (`main.js`) is responsible for the dynamic functionality of the PokeNisc web application. Here's a breakdown of what it does:
## Event Listener

The script starts by setting up an event listener for the form submission event. When the form is submitted, the script prevents the page from reloading, fetches the Pokemon data from the PokeAPI, and updates the `pokedex` div with this data.

## Fetching Data

The script fetches data from the PokeAPI using the `fetch` function. It sends a GET request to the PokeAPI with the name of the Pokemon entered in the form. The PokeAPI responds with a JSON object containing data about the Pokemon.

## Displaying Data

The script then extracts the relevant data from the JSON object and updates the `pokedex` div with this data. It updates the `image` div with the Pokemon's image, and the `data` div with the Pokemon's name, types, and weaknesses.

## Error Handling

If the user enters a name that does not correspond to a Pokemon, the PokeAPI will respond with an error. The script handles this by catching the error and displaying an error message in the `pokedex` div.

# 📝 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

# 🙋‍♂️ Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

# 📬 Contact

If you have any questions about the project, please feel free to contact me at [luisnisc30mayo2005@gmail.com](mailto:luisnisc30mayo2005@gmail.com).

# 🙏 Acknowledgments

- Thanks to [PokeAPI](https://pokeapi.co/) for providing the data used in this project.
- Thanks to all the contributors who helped to improve this project.
