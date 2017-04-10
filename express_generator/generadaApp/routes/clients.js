"use strict";

var express = require("express");
var router = express.Router();

//Middleware para clientes solo
router.use((req, res, next) => {
    console.log("middleware de router clientes");
    next();
});

router.get("/", (req, res, next) => {
    res.send("respuesta a clients");
});
router.get("/:id", (req, res, next) => {
    console.log("req.query " + req.query.name);
    console.log("Hemos recibido " + req.params.id);
    res.send("recibido parametro " + req.params.id);
});

router.post("/", function (req, res, next) {
    console.log("req.body " + JSON.stringify(req.body));
    res.json({recibido: req.body.num});
});


module.exports = router;

