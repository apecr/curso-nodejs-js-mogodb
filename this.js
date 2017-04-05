"use strict";

var casa = {
    ventanas: 2,
    cuantasVentanas: function () {
        console.log("La casa tiene " +  this.ventanas + " ventanas");
        return this.ventanas;
    }
};

var externalCuantasVentanas = function(){
    console.log(casa.cuantasVentanas.bind(casa));
    return casa.cuantasVentanas.bind(casa);
}

function Coche(){
    this.ruedas = 4;
    this.cuantasRuedas = function(){
        console.log("El coche tiene " +  this.ruedas + " ruedas");
        return this.ruedas;
    }

}

module.exports = {
    casa: casa,
    externalCuantasVentanas: externalCuantasVentanas(),
    Coche: Coche
}
