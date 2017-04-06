var numero = 1;

console.log(numero);
console.log(typeof(numero));

numero = "hola";
console.log(typeof(numero));

// strings
console.log("texto de prueba".split(' '));
var textoLargo =
    'Linea1\n'+
    'Linea2\n';
console.log(textoLargo);
var textoLargo2 = [ "linea1", "linea2"].join("\n");
console.log(textoLargo2);

// Objetos
var objeto = {
    numero: 1,
    texto: "hola",
    sumaDos: function(v){
        return v + 2;
    }
}

console.log(objeto.numero);
console.log(objeto.texto);
console.log(objeto.sumaDos(3));

// Array

var array = [1, "hola", function(v){return v +2;},{valor: "hola"}];
console.log(array);
console.log(array[0]);
console.log(array[2](500));

// Hoisting

var x = 100;

var hosting = function(){
    // var x; // Ergo es undefined
    if (x  < 200){
        var x = 30;
    }
    return x;
};

console.log(x, hosting());
