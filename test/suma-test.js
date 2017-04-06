"use strict";

const math = require("../modulos/suma");
const assert = require("assert");

describe("Testing export modules", () => {
    it("Should sum 2 and 4", () => {
        //Act
        const result = math.suma(2, 4);
        assert.equal(6, result, "Sum value is not 6");
    });
    it("Should substract 6 and 7", () => {
        //Act
        const result = math.resta(6, 7);
        assert.equal(-1, result, "Sum value is not 6");
    });
});