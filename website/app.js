/*===============key-URL-global variables==================*/
const defaultApiCall =
  "https://api.openweathermap.org/data/2.5/weather?zip={zip code}&appid={API key}";

const baseURI = "https://api.openweathermap.org/data/2.5/weather?zip=";
/* save the API key to a varible here and */
const key = "&appid=127963487c6c5c760c53d9f994bc64f1&units=imperial";

const feelings = document.getElementById("feelings");

const zip = document.getElementById("zip");

/*============projectData=============*/
let d = new Date();
let newDate = d.toDateString();

const date = document.getElementById("date");
const temp = document.getElementById("temp");
const content = document.getElementById("content");

const projectData = async (data) => {
  try {
    if (data.cod != 200) {
      return data;
    }
    const info = {
      date: newDate,
      temp: Math.round(data.main.temp),
      content: feelings.value,
    };
    return info;
  } catch (error) {
    //to console.log the error if there any
    console.log(error);
  }
};

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
  } catch (error) {
    //to console.log the error if there any
    console.log(error.message);
  }
};

/*=================fixData=======================*/
const fixData = async (data) => {
  try {
    if (data.message) {
      const dataInfo = data.message;
      //testing
      console.log(dataInfo);
      return dataInfo;
    } else {
      const dataInfo = { data, feelings: feelings.value, temp: data.main.temp };
      //testing
      console.log(dataInfo);
      return dataInfo;
    }
  } catch (error) {
    //to console.log the error if there any
    console.error(error);
  }
};
/*===============Post Data==================*/
const postData = async (url='', data={})=>{
    const response = await fetch(url, {
        method: 'POST',
        credentials:"same-origin",
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(data)
    });
    try {
        const result = await response.json();
        return result;
    }catch (err) {
        console.error(err);
    }
};

/*===============dynamically UI update==================*/
const updateUI = async (info) => {
  if (!info.message) {
    temp.innerHTML = `${info.temp}&#176`;
    content.innerHTML = info.content ? info.content : "What do you feel";
    date.innerHTML = info.date;
    message.innerHTML = "";
  } else {
    console.log(`error line `);
  }
};
/*===============generate-button==================*/
//store the button in a varible so I can add to it an addEventListener on click
const generate = document.getElementById("generate");
//addEventListener on click
generate.addEventListener("click", (event) => {
  event.preventDefault();
  // stor the new url with the zip plus api key in a varible
  const apiURL = `${baseURI}${zip.value}${key}`;

  getData(apiURL).then((data) => {
    projectData(data);
       
});
