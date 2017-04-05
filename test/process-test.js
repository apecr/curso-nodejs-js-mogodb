"use strict";

const describe = require("mocha").describe;
const it = require("mocha").it;
const assert = require("assert");
const processEyo = require("../process.js");

describe("Functions of Node process", () => {
    it("Should return the pid of the process", () => {
        //Act
        //Assert
        assert.ok(processEyo.info.pid, "Pid of the process " + processEyo.info.pid);
        assert.ok(processEyo.info.version, "Version of the process " + processEyo.info.version);
        assert.ok(processEyo.info.platform, "Platform of the process " + processEyo.info.platform);
        assert.ok(processEyo.info.title, "Title of the process " + processEyo.info.title);
        assert.ok(processEyo.info.argumentos, "Arguments of the process " + processEyo.info.argumentos);
        assert.ok(processEyo.info.execPath, "PAth of the process " + processEyo.info.execPath);
        assert.ok(processEyo.info.folder, "Folder of the process " + processEyo.info.folder);
    });
    it("Should do something on exit", (done) => {
        //Arrange
        //Act
        console.log("Comienzo proceso");
        process.on("exit", meDespido);
        process.exit(0);
        console.log("Terminado el proceso");
        //Assert
    });
});

var meDespido = function(){
    console.log("Adios, antes de terminar me despido");
    assert.ok(true, "Finalizando el proceso");
}