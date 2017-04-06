// definimos un objeto de forma literal
var empleado = {
    nombre: "Smith",
    profesion: "Agente",
    edad: 42,
    armas: ["pistola", "rifle", "kungfu"]
};

console.log(empleado);

var serializado = JSON.stringify(empleado);

console.log(serializado);

// des-serializar el objeto

var leido;
serializado += '}';
try {
    leido = JSON.parse(serializado);
    console.log(leido);
} catch (err) {
    console.log('no se pudo leer "serializado"');
}

if (typeof leido != 'undefined') {
    console.log('hay algo leido');
} else {
    console.log('no hay nada leido');
}

for (var i = 0; i < empleado.armas.length; i++){
    console.log(empleado.nombre + (empleado.armas[i] === 'kungfu' ? ' sabe ' : ' tiene ') + empleado.armas[i]);
}