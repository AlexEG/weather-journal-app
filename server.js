console.log(`hello`);

// Setup empty JS object to act as endpoint for all routes

projectData = {};

// Express to run server and routes
const express = require("express");
// Start up an instance of app
const app = express();

//Create a server running on the port 
app.listen(3000)

/* Middleware*/
const bodyParser = require("body-parser");
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());
// Initialize the main project folder
app.use(express.static("website"));

// Setup Server
