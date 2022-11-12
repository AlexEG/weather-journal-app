console.log(`hello`);

// Setup empty JS object to act as endpoint for all routes

projectData = {};

// Express to run server and routes
const express = require("express");
// Start up an instance of app
const app = express();


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
/*========================================*/
app.get("/all", (req, res) => {
    res.status(200).send(projectData)});
/*==============local server==============*/
//Create a server running on the port
const port = 8000;
//callback function with arrow function
//Callback to debug the code
const server = app.listen(port, () => {
console.log(`running on localhost: ${port}`);
});

function startServer() {
server;
}
// Setup Server
startServer();
