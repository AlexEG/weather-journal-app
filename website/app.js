/*add units metric to convert kelvin units to celsius */
// Create a new date instance dynamically with JS
const date = document.getElementById("date");
let d = new Date();
let newDate = d.toDateString();
/*=========================*/
const temp = document.getElementById("temp");
const zip = document.getElementById("zip");

/*===============key-URL==================*/
const defaultApiCall =
  "https://api.openweathermap.org/data/2.5/weather?zip={zip code}&appid={API key}";
const baseURI = "https://api.openweathermap.org/data/2.5/weather?zip=";
/* save the API key to a varible here and */
const key = "&appid=127963487c6c5c760c53d9f994bc64f1&units=imperial";

/*===============generate-button==================*/

//store the button in a varible so I can add to it an addEventListener on click
const generate = document.getElementById("generate");
//addEventListener on click
generate.addEventListener("click", (event) => {
  event.preventDefault();
  // stor the new url with the zip plus api key in a varible
  const apiURL = `${baseURI}${zip.value}${key}`;
  getData(apiURL);
  //testing
  //console.log(apiURL);
});







/*===============get-data==================*/
const getData = async (openWeathe) => {
  try {
    // waiting for the data from fetching the URL
    const response = await fetch(openWeathe);
    // store the value of response in (result) in json file
    const result = await response.json();
    if (result.cod != 200) {
      return result;
    }
    return result;
  } catch (err) {
    //to console.log the error if there any err=error
    console.log(err.message);
  }
};







/*========================================*/
const feelings = document.getElementById("feelings");
const fixData = async (data) => {
  try {
    if (data.message) {
      const dataInfo = data.message;
      //testing
  console.log(dataInfo)
      return dataInfo;
    } else {
      const dataInfo = { data, feelings: feelings.value, temp: data.main.temp };
           //testing
  console.log(dataInfo)
      return dataInfo;
    }
  } catch (err) {
    console.error(err);
  }
};
