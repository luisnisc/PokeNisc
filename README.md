# PokeNisc Project Documentation

## Overview
This project is a simple web application that allows users to search for information about a Pokemon using the PokeAPI. The user enters the name of a Pokemon into a form, and the application displays information about the Pokemon, including its types and weaknesses.

## HTML Structure

The HTML document is structured as follows:

- The `head` section includes links to the project's CSS file and an icon for the webpage.
- The `body` section contains a form where users can enter the name of a Pokemon and submit it.
- The `div` with the id `pokedex` is where the Pokemon's information will be displayed. It contains two `div` elements: one for the Pokemon's image (`image`) and one for the Pokemon's data (`data`). The `data` div contains two `ul` elements for listing the Pokemon's types (`typesList`) and weaknesses (`weaknessesList`).
- The `script` tag at the end of the `body` section links to the JavaScript file that handles the form submission and fetches data from the PokeAPI.

## CSS Styling

The CSS file (`main.css`) linked in the `head` section is responsible for styling the webpage. It defines the appearance of the form, the `pokedex` div, and the `typesList` and `weaknessesList` elements.

## JavaScript Functionality

The JavaScript file (`main.js`) linked at the end of the `body` section handles the form submission event. When the form is submitted, it fetches data about the entered Pokemon from the PokeAPI and displays it in the `pokedex` div. It also fetches additional data about the Pokemon's types and weaknesses and displays them in the `typesList` and `weaknessesList` elements.

## Future Improvements

Potential future improvements for this project could include adding more information about each Pokemon, such as their abilities or evolution chain, or adding more interactivity, such as a feature to compare different Pokemon.

## Conclusion

This project is a simple but effective demonstration of how to use HTML, CSS, and JavaScript together to create a dynamic web application that interacts with an API.

# JavaScript Code Explanation

The JavaScript file (`main.js`) is responsible for the dynamic functionality of the PokeNisc web application. Here's a breakdown of what it does:

## Event Listener

The script starts by setting up an event listener for the form submission event. When the form is submitted, it prevents the default form submission action (which would refresh the page), and instead calls a function to fetch data from the PokeAPI.

## Fetching Data

The function called by the form submission event listener uses the `fetch` function to send a request to the PokeAPI for data about the Pokemon entered by the user. The `fetch` function returns a Promise that resolves to the Response to that request, whether it is successful or not.

## Handling the Response

The response from the PokeAPI is processed using the `.json()` method, which also returns a Promise. This Promise resolves to the actual data about the Pokemon.

## Displaying the Data

Once the data is obtained, it is used to update the `pokedex` div in the HTML document. The Pokemon's image is displayed in the `image` div, and its types and weaknesses are displayed in the `typesList` and `weaknessesList` elements.

## Error Handling

If there is an error at any point in this process (for example, if the user enters the name of a Pokemon that doesn't exist), the script catches the error and logs it to the console.

## Conclusion

This JavaScript file demonstrates how to use the Fetch API to retrieve data from a third-party API, how to process and display that data in an HTML document, and how to handle errors that may occur during this process.
