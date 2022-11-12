
/*==========================*/

projectData = {};

const express = require("express");

const app = express();

app.listen(3000)

/********Middleware*******/
const bodyParser = require("body-parser");


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const cors = require("cors");
app.use(cors());


app.use(express.static("website"));



/*==========================*/

app.get('/', (req, res) => {
console.log(`here line 23 `);
res.sendStatus(200);
});
