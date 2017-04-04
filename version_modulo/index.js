"use strict";

var fs = require("fs");
var path = require("path");

var versionModulo = function (moduleName, callbackVM) {

    var fileDescModule = path.join("./node_modules", moduleName, "package.json");
    return fs.readFile(fileDescModule, (error, data, callback) => callBackReadFile(error, data, callbackVM));
};

module.exports = {
    versionModulo: versionModulo
};

var callBackReadFile = function (error, data, callback) {
    if (error) {
        return callback(error);
    }
    // Si no ha habido ningun error convertimos el fichero a objeto
    var packageJson = {};
    try {
        packageJson = JSON.parse(data);
    } catch (e) {
        return callback("Error al parsear el fichero", null);
    }
    if (packageJson && packageJson.version) {
        return callback(null, packageJson.version);
    }
}