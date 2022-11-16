
/*add units metric to convert kelvin units to celsius */
// Create a new date instance dynamically with JS
const date = document.getElementById('date');
let d = new Date();
let newDate = d.getMonth() + "." + d.getDate() + "." + d.getFullYear();



/*============GET Request=====BUTTON========*/
const feelings = document.getElementById('feelings');
const temp = document.getElementById('temp');
const zip = document.getElementById('zip');


/*===============key URL==================*/
const defaultApiCall = "https://api.openweathermap.org/data/2.5/weather?zip={zip code}&appid={API key}";
const baseURI = "https://api.openweathermap.org/data/2.5/weather?zip=";
/* save the API key to a varible here and */
const key = "&appid=127963487c6c5c760c53d9f994bc64f1&units=imperial";


/*===============generate button==================*/
//stor the button in a varible so I can add to it an addEventListener on click
const generate = document.getElementById('generate');
//addEventListener on click
generate.addEventListener("click", (event)=>{
    event.preventDefault();
});
















