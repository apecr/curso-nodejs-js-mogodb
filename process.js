"use strict";

//informacion del proceso
var info = {
    pid: process.pid,
    version: process.version,
    platform: process.platform,
    title: process.title,
    argumentos: process.argv,
    execPath: process.execPath,
    folder: process.cwd()
};

module.exports = {
    info: info
}