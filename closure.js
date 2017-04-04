"use strict";

function createClosure(valor){
    return function(){
        return valor;
    }
}

function createSumador(valor){
    return function(valor2){
        return valor + valor2;
    }
}

module.exports = {
    createClosure: createClosure,
    createSumador: createSumador
}