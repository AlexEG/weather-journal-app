/*
let express = require("express");
let cors = require("cors");
let app = express();

app.use(cors());

app.get("/products/:id", function (req, res, next) {
  res.json({ msg: "This is CORS-enabled for all origins!" });
});

app.listen(80, function () {
  console.log("CORS-enabled web server listening on port 80");
});
*/

/*==========================*/
console.log(`test `);
const express = require("express");
const app = express();

app.get('/', (req, res) => {
  console.log(`here line 23 `);
  res.send( `hi!!!` );
});

app.listen(3050);

/*
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

const cors = require("cors");

app.use(cors());

app.use(express.static("website"));

*/
