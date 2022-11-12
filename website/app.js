/* Global Variables */

/* save the API key to a varible here and 
add units metric to convert kelvin units to celsius */
const APIKey = '127963487c6c5c760c53d9f994bc64f1&units=metric';

//restor the value of the input box to a varible
let yourFeeling = document.getElementById('feelings').value
let zipCode = document.getElementById('zip').value


// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

/*==========================*/

const apiCall = `https://api.openweathermap.org/data/2.5/weather?zip={zip code}&appid=${APIKey}`
