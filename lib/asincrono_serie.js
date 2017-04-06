'use strict';

console.log('Empiezo');

function escribeTrasDosSegundos(texto, callback) {
    setTimeout(function () {
        console.log(texto);
        callback();
    }, 2000);
}

// bucle asincrono en serie

// llamar a una funcion N veces en serie,
// al finalizar llamar al callback de finalizacion

function ejecutaSerie(n, funcToExecuteInLoop, callbackFin) {
    if (n === 0) {
        callbackFin()
        return;
    }
    n--;
    funcToExecuteInLoop(n, function () {
        ejecutaSerie(n, funcToExecuteInLoop, callbackFin);
    });
}

ejecutaSerie(5, escribeTrasDosSegundos, function () {
    console.log('He terminado');
})