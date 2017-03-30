'use strict';

console.log('Empiezo');

function escribeTrasDosSegundos(texto, callback) {
    setTimeout(function () {
        console.log(texto);
        callback();
    }, 2000);
}

// bucle asincrono en serie

// llamar a una funcion con un array en serie,
// al finalizar llamar al callback de finalizacion
function ejecutaSerie(lista, funcToExecuteInLoop, callbackFin) {
    if (lista.length === 0) {
        callbackFin()
        return;
    }
    funcToExecuteInLoop(lista.shift(), function () {
        ejecutaSerie(lista, funcToExecuteInLoop, callbackFin);
    });
}

var lista = [1,2,'tres',4,5];

ejecutaSerie(lista, escribeTrasDosSegundos, function () {
    console.log('He terminado');
})