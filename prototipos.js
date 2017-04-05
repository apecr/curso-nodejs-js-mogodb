"use strict";

function Persona(name){
    this.name = name;
}

Persona.prototype.greet = function(){
    var output = "Hola me llamo " + this.name;
    console.log(output);
    return output;
}

module.exports = {
    Persona: Persona
}