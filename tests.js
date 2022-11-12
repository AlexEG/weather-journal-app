/*==========================*/
projectData = {};

const express = require("express");
const app = express();
app.listen(3050)

/********Middleware*******/
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const cors = require("cors");
app.use(cors());
app.use(express.static("website"));



let getInfo = (req, res) => res.status(200).send(projectData);

app.get("/all", getInfo);








/*==========================*/

