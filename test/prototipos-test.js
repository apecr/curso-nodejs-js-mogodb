"use strict";

const describe = require("mocha").describe;
const it = require("mocha").it;
const assert = require("assert");
const prototipos = require("../prototipos.js");

describe("Using the prototipos.js file", () => {
    const name = "Neo";
    it("Should return OK the Persona constructor", () => {
        //Arrange
        //Act
        var persona = new prototipos.Persona(name);
        //Assert
        assert.ok(persona, "Created the person object");
    });
    it("Should wave Neo", () => {
        //Arrange
        var persona = new prototipos.Persona(name);
        //Act
        const greet = persona.greet();
        //Assert
        assert.ok(greet, "Hola me llamo " + name, "Created the person object");
    });
});