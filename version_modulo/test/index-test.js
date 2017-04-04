"use strict";

const describe = require("mocha").describe;
const it = require("mocha").it;
const assert = require("assert");
const versionModulo = require("../index.js");


describe("Use of the version module application", () => {
    it("Should return a number of version of chance", (done) => {
        //Arrange
        const modulo = "chance";
        const expected = "1.0.6";
        //Act
        versionModulo.versionModulo(modulo, (error, version) => {
            //Assert
            callBackVersionModulo(error, version, expected);
            done();
        });
    });
    it("Should return a number of version of mocha", (done) => {
        //Arrange
        const modulo = "mocha";
        const expected = "3.2.0"
        //Act
        versionModulo.versionModulo(modulo, (error, version) => {
            //Assert
            callBackVersionModulo(error, version, expected);
            done();
        });

    });
});

var callBackVersionModulo = function (error, version, expected) {
    assert.equal(version, expected, "Version esperada " + expected + ", real " + version);
}
