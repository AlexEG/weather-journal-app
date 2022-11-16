
/*add units metric to convert kelvin units to celsius */
// Create a new date instance dynamically with JS
const date = document.getElementById('date');
let d = new Date();
let newDate = d.getMonth() + "." + d.getDate() + "." + d.getFullYear();



/*=========================*/
const feelings = document.getElementById('feelings');
const temp = document.getElementById('temp');
const zip = document.getElementById('zip');


/*===============key-URL==================*/
const defaultApiCall = "https://api.openweathermap.org/data/2.5/weather?zip={zip code}&appid={API key}";
const baseURI = "https://api.openweathermap.org/data/2.5/weather?zip=";
/* save the API key to a varible here and */
const key = "&appid=127963487c6c5c760c53d9f994bc64f1&units=imperial";






/*===============generate-button==================*/

//store the button in a varible so I can add to it an addEventListener on click
const generate = document.getElementById('generate');
//addEventListener on click
generate.addEventListener("click", (event)=>{
    event.preventDefault();
    // stor the new url with the zip plus api key in a varible
    const apiURL = `${baseURI}${zip.value}${key}`;
   getData(apiURL);
    console.log(apiURL);
    });
  
/*===============get-data==================*/
const getData = async (url) =>{
    try {   
        // waiting for the data from fetching the URL
           const response = await fetch(url);
           // store the value of response in (result) in json file
            const result = await response.json();
            if(result.cod != 200){return result;}
            return result;}
            //to console.log the error if there any e=error
            catch(e) {console.log(e.message);}
};













