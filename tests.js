/*==========================*/
projectData = {};
const express = require("express");
const app = express();
/********Middleware*******/
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const cors = require("cors");
app.use(cors());
app.use(express.static("website"));



let getInfo = (req, res) => res.status(200).send(projectData);

app.get("/all", getInfo);

const port = 8000;
const server = app.listen(port, ()=>{console.log(`running on localhost: ${port}`)})

function listening(){
    console.log("server running"); 
    console.log(`running on localhost: {$port}`);
}

function one (){
    server
}

one()
/*==========================*/

