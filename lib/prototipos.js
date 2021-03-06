"use strict";

function Persona(name) {
    this.name = name;
}

function Agente(name) {
    Persona.call(this, name);
    // esto ejecuta el constructor de Persona con el this de Agente
    // definiendo en el this de Agente una propiedad name
    // y asignandole el parametro recibido
}

// le asignamos con prototipo una persona
Agente.prototype = new Persona("");

Persona.prototype.greet = function () {
    var output = "Hola me llamo " + this.name;
    console.log(output);
    return output;
}

function SuperHero() {
    this.fly = function () {
        var output = this.name + " flies";
        console.log(output);
        return output;
    };
    this.dodgeBullets = function () {
        var outputDodge = this.name + " dodge bullets";
        console.log(outputDodge);
        return outputDodge;
    }
}

Object.assign(Agente.prototype, new SuperHero());

module.exports = {
    Persona: Persona,
    Agente: Agente,
    SuperHero: SuperHero
}