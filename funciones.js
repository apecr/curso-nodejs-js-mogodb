// una funcion basica

function funcionBasica() {
    console.log('funcion basica se ejecutó');
}
funcionBasica();

// funcion como declaracion, con argumentos y retorno

function suma(a, b) {
    return a + b;
}

console.log(suma(1, 2));

// funcion como expresion

var multiplica = function (a, b) {
    return a * b;
};

console.log(multiplica(2,4));

var lang = 'es';

function accesoContexto(){
    return lang;
}

console.log(accesoContexto());

// metodo de un objeto

var agente = {
    nombre: "Smith",
    saluda: function(){
        return 'Hola soy el agente ' + this.nombre;
    }
};

console.log(agente.saluda())

// constructor de objetos

function Fruta(fruitName){
    this.getName = function () {
        return fruitName;
    }
    this.setName = function(value){
        fruitName = value;
    }
}

var limon = new Fruta('Citrus limon');
console.log(limon);
console.log(limon.getName());
limon.setName('Manzana');
console.log(limon.getName());













