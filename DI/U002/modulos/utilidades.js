//utilidades

console.log("Entrando en utilidades.js");

//funciones
let sumar = (num1, num2) => num1 + num2;
let restar = (num1, num2) => num1 - num2;


//para exportar funciones es necesario decirlo explicitamente

module.exports = {
    sumar: sumar,
    restar: restar,
    pi: 3.1416
};
