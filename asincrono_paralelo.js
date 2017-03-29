'use strict';


function escribeTrasDosSegundos(texto, callback, textoFin) {
    setTimeout(function () {
        console.log(texto);
        callback(textoFin);
    }, 2000);
}

// bucle asíncrono paralelo

var acabados = 0;
for (var i = 0; i < 5; i++){
    escribeTrasDosSegundos('texto'+i, function () {
        acabados++;
        if (acabados >= 5){
            console.log('Fin');
        }
    })
}