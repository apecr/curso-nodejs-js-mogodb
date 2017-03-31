'use strict';

var async = require('async');


console.log('Empiezo');

function escribeTrasDosSegundos(texto, callback) {
    setTimeout(function () {
        console.log(texto);
        callback();
    }, 2000);
}

// bucle asincrono en serie

var lista = [1, 2, 'tres', 4, 5];


async.eachSeries(lista, escribeTrasDosSegundos, function () {
    console.log('He terminado');
});

async.series({
    one: function (callback) {
        setTimeout(function () {
            callback(null, 1);
            console.log("one");
        }, 200);
    },
    two: function (callback) {
        setTimeout(function () {
            callback(null, 2);
            console.log("two");
        }, 100);
    }
}, function (err, results) {
    // results is now equal to: {one: 1, two: 2}
    console.log("Results", results);
});
