"use strict";

const assert = require("assert");
const eventemitter = require("../eventemitter.js");

describe("Testing the options of event emitter", () => {
    it("Should ring and br when call the phone", () => {
        //Arrange
        eventemitter.telefono.vibrar = 0;
        eventemitter.telefono.sonar = 0;
        //Act
        var myEmitter = eventemitter.myEmitter;
        myEmitter.emit(eventemitter.eventId);
        //Assert
        assert.equal(eventemitter.telefono.vibrar, 1, "Ha vibrado una vez");
        assert.equal(eventemitter.telefono.sonar, 1, "Ha sonado una vez");
    });
    it("Should vibe when call mother, not ring", () => {
        //Arrange
        eventemitter.telefono.vibrar = 0;
        eventemitter.telefono.sonar = 0;
        const who = "mother";
        //Act
        var myEmitter = eventemitter.myEmitter;
        myEmitter.emit(eventemitter.eventId, who);
        //Assert
        assert.equal(eventemitter.telefono.vibrar, 1, "Ha vibrado una vez");
        assert.equal(eventemitter.telefono.sonar, 0, "Ha sonado una vez");
    });
});