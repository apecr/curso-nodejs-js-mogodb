"use strict";

const express = require("express");
const morgan = require("morgan");

const port = 3000;
var app = express();
// Middleware es morgan
app.use(morgan("dev"));

//Peticiones get a la raiz
app.get("/", (request, response) => {
    console.log("Peticion a /");
    response.send("Hello World");
});

// server listening
var server = app.listen(port, () => {
    console.log("Server listening on port " + server.address().port);
})