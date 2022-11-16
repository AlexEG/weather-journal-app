// Setup empty JS object to act as endpoint for all routes
let projectData = {};

// Express to run server and routes
const express = require("express");
// Start up an instance of app
const app = express();

/* Middleware*/
const bodyParser = require("body-parser");
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Initialize the main project folder
app.use(express.static("website"));

// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());

/*===================POST=====================*/
app.post('/add', async (req, res) => {
  const info = await req.body;
  projectData = info;
  res.send(projectData);
});
/*===================GET=====================*/
app.get("/all", async (req, res) => {
  if(projectData){
      res.send(projectData);
  }
});
/*==============local server==============*/
//Create a server running on the port
//callback function with arrow function
//Callback to debug the code

// Setup Server

const port = 8000;
app.listen(port, () => {
  console.log(`running on localhost: ${port}`);
});
