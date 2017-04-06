"use strict";

const events = require('events');

var myEmitter = new events.EventEmitter();

var telefono = {
    sonar: 0,
    vibrar: 0
};

const eventName = "llamar telefono";
myEmitter.on(eventName, sonarTelefono);
myEmitter.on(eventName, vibrarTelefono);

function sonarTelefono(who) {
    var output = "ring ring ring";
    if (who !== "mother"){
        telefono.sonar++;
        output = "";
    }
    return output;
};

function vibrarTelefono() {
    telefono.vibrar++;
    return "brr brr brr";
};


module.exports = {
    myEmitter: myEmitter,
    eventId: eventName,
    telefono: telefono
};