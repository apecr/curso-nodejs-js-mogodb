"use strict";

const assert = require("assert");
const thisFile = require("../lib/this.js");

describe("Use of this file", () => {
    it("Should get the number of windows", () => {
        //Arrange

        //Act
        var ventanas = thisFile.externalCuantasVentanas();
        //Assert
        assert.equal(2, ventanas, "Numero de ventanas distinto de dos: " + ventanas);
    });
    it("Should get the number of wheels", () => {
        //Arrange
        var coche = new thisFile.Coche();
        //Act
        var ruedas = coche.cuantasRuedas();
        //Assert
        assert.equal(4, ruedas, "Numero de ventanas distinto de dos: " + ruedas);
    });
});

