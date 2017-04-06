"use strict";
const describe = require("mocha").describe;
const it = require("mocha").it;
const assert = require("assert");
const prototipos = require("../prototipos.js");

describe("Using the prototipos.js file", () => {
    const namePerson = "Neo";
    const nameAgent = "Smith";
    const nameHero = "Spiderman";
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
        assert.equal(greet, "Hola me llamo " + namePerson, "Created the person object");
    });
    it("Should works the Agent function", () => {
        //Arrange
        var agent = new prototipos.Agente(nameAgent);
        //Act
        const greet = agent.greet();
        //Assert
        assert.equal(greet, "Hola me llamo " + nameAgent, "Created the person object");
        assert.ok(agent instanceof prototipos.Agente, "Prototype of Agente is Agente");
        assert.ok(agent instanceof prototipos.Persona, "Prototype of Agente is Persona");
    });
});

describe("Testing multiple inheritance", () => {
    it("Should inherite  superhero from agent" , () => {
        //Arrange
        //Act
        var superHero = new prototipos.SuperHero();
        //Assert
        assert.ok(superHero.fly, "SuperHero has fly function");
        assert.ok(superHero.dodgeBullets, "SuperHero has dodgeBullets function");
    });
    it("Should the Agent have tha powerrs of a superhero", () => {
        //Arrange
        Object.assign(prototipos.Agente.prototype, new prototipos.SuperHero());
        //Act
        var hero = new prototipos.Agente(nameHero);
        //Assert
        assert.equal(hero.fly(), nameHero + " flies", "Our hero can fly");
        assert.equal(hero.dodgeBullets(), nameHero + " dodge bullets", "Our hero can dodge bullets");
    });
});