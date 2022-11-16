/* Global Variables */

/* save the API key to a varible here and 
add units metric to convert kelvin units to celsius */
const APIKey = "127963487c6c5c760c53d9f994bc64f1&units=metric";
const apiCall = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${APIKey}`;

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + "." + d.getDate() + "." + d.getFullYear();



/*============GET Request=====BUTTON========*/
//stor the button in a varible so I can add to it an addEventListener on click
const generate = document.getElementById('generate');
const zip = document.getElementById('zip');
const key = "&appid=127963487c6c5c760c53d9f994bc64f1&units=imperial";
const baseURI = "https://api.openweathermap.org/data/2.5/weather?zip=";
const feelings = document.getElementById('feelings');

/*===============openweathermapp==================*/
//addEventListener on click

//restor the value of the input box to a varible
