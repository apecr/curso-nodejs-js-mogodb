"use strict";

const assert = require("assert");
const closure = require("../lib/closure.js");
const closure2 = require("../lib/closure2.js");

describe("Testing closures", () => {
    it("Should return the passed value", () => {
        //Act
        var valorFuncClosure = closure.createClosure(1)();
        //Assert
        assert.equal(valorFuncClosure, 1, "Error al recoger el valor" + valorFuncClosure);
    });
    it("Should sum 15", () => {
        //Act
        var funcCLosure = closure.createSumador(5);
        //Assert
        assert.equal(funcCLosure(10), 15, "Error al recoger el valor" + funcCLosure(10));
    });
});

describe("Testing closures 2", () => {
    it("Should get the correct age for Smith", () => {
        //Arrange
        const name = "Smith";
        const age = 33;
        //Act
        var smith = closure2.createAgent(name);
        smith.setAge(age);
        //Assert
        assert.equal(smith.getAge(), age, "Error al recoger el valor" + smith.getAge());
        assert.equal(smith.getName(), name, "Error al recoger el valor" + smith.getName());
    });
    it("Should get the correct age for Jones", () => {
        //Arrange
        const name = "Jones";
        const newAge = 42;
        //Act
        var jones = closure2.createAgent(name);
        jones.setAge(newAge);
        //Assert
        assert.equal(jones.getAge(), newAge, "Error al recoger el valor" + jones.getAge());
        assert.equal(jones.getName(), name, "Error al recoger el valor" + jones.getName());
    });
    it("Make the setTimeout function", () => {
        //Arrange
        const name = "Jones";
        const newAge = 42;
        const output = "Soy " + name + " y tengo " + newAge + " años";
        //Act
        var jones = closure2.createAgent(name);
        jones.setAge(newAge);
        //Assert
        setTimeout(jones.writeParams, 1000);
        assert.equal(jones.writeParams(), output, "Output right");
    });
});