"use strict";

const describe = require("mocha").describe;
const it = require("mocha").it;
const assert = require("assert");
const processEyo = require("../process.js");

describe("Functions of Node process", () => {
    it("Should return the pid of the process", () => {
        //Act
        const pidProcess = processEyo.info.pid;
        //Assert
        assert.ok(pidProcess, "Pid of the process " + pidProcess);
    });
})