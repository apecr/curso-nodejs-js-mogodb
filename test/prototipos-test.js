"use strict";

const assert = require("assert");
const prototipos = require("../prototipos.js");

describe("Using the prototipos.js file", () => {
    const namePerson = "Neo";
    const nameAgent = "Smith";
    it("Should return OK the Persona constructor", () => {
        //Arrange
        //Act
        var persona = new prototipos.Persona(namePerson);
        //Assert
        assert.ok(persona, "Created the person object");
    });
    it("Should wave Neo", () => {
        //Arrange
        var persona = new prototipos.Persona(namePerson);
        //Act
        const greet = persona.greet();
        //Assert
        assert.ok(greet, "Hola me llamo " + namePerson, "Created the person object");
    });
    it("Should works the Agent function", () => {
        //Arrange
        var agent = new prototipos.Agente(nameAgent);
        //Act
        const greet = agent.greet();
        //Assert
        assert.ok(greet, "Hola me llamo " + nameAgent, "Created the person object");
    });
});