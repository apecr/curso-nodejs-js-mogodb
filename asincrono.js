'use strict';

var logarFin = function (textoFin) {
    console.log(textoFin);
}

console.log('Empiezo');

function escribeTrasDosSegundos(texto, callback, textoFin) {
    setTimeout(function () {
        console.log(texto);
        callback(textoFin);
    }, 2000);
}


escribeTrasDosSegundos('texto1', function () {
    logarFin(arguments[0]);
    escribeTrasDosSegundos('texto2', logarFin, 'Fin2');
}, 'Fin1');


