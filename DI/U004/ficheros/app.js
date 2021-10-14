const fs = require('fs');

let fichero = fs.readFileSync('clientes.json');

let clientes = new Array();
let posicion=0;
let estadoNuevo = 0;

clientes = JSON.parse(fichero);

let dni = document.getElementById("dni");
let nombre = document.getElementById("nombre");
let telefono = document.getElementById("telefono");

let b1 = document.getElementById("botonPrimero");
let b2 = document.getElementById("botonAnterior");
let b3 = document.getElementById("botonSiguiente");
let b4 = document.getElementById("botonUltimo");
let b5 = document.getElementById("botonEliminar");
let b6 = document.getElementById("botonNuevo");
let b7 = document.getElementById("botonGuardar");

//Mostramos el primer registro al iniciar
dni.value=clientes[0].dni;
nombre.value=clientes[0].nombre;
telefono.value=clientes[0].telefono;

//Al pulsar boton primer registro
b1.addEventListener('click', ()=>{
    posicion=0;

    dni.value=clientes[posicion].dni;
    nombre.value=clientes[posicion].nombre;
    telefono.value=clientes[posicion].telefono;
})

//Al pulsar boton siguiente registro
b2.addEventListener('click',()=>{
    if(posicion>0){
        posicion--;
        dni.value=clientes[posicion].dni;
        nombre.value=clientes[posicion].nombre;
        telefono.value=clientes[posicion].telefono;
    }else{
        dni.value=clientes[0].dni;
        nombre.value=clientes[0].nombre;
        telefono.value=clientes[0].telefono;
    }
})

//Al pulsar boton registro anterior
b3.addEventListener('click',()=>{
    if(posicion<clientes.length){
        posicion++;
        dni.value=clientes[posicion].dni;
        nombre.value=clientes[posicion].nombre;
        telefono.value=clientes[posicion].telefono;
    }else{
        dni.value=clientes[posicion - 1].dni;
        nombre.value=clientes[posicion - 1].nombre;
        telefono.value=clientes[posicion - 1].telefono;
    }
})

//Al pulsar boton ultimo registro 
b4.addEventListener('click', ()=>{
    posicion=clientes.length - 1;
    dni.value=clientes[posicion].dni;
    nombre.value=clientes[posicion].nombre;
    telefono.value=clientes[posicion].telefono;
})

//Al pulsar el boton eliminar registro
b5.addEventListener('click',()=>{
    clientes.splice(posicion,1);
})

//Al pulsar insertar nuevo registro
b6.addEventListener('click',()=>{
    if(estadoNuevo==0){
        dni.value="";
        nombre.value="";
        telefono.value="";
        b6.className="btn btn-large btn-negative";      //Cambiamos el color del boton a rojo
        estadoNuevo=1;
    }else{
        let c = {}
        c = {                                           //Capturamos los datos del formulario
            dni: dni.value,
            nombre: nombre.value,
            telefono: nombre.value
        }
        clientes.push(c);
        b6.className="btn btn-large btn-primary";       //Cambiamos el color del boton a azul
        estadoNuevo=0;    

        
    }
})

b7.addEventListener('click',()=>{
    fs.writeFileSync('clientes.json', JSON.stringify(clientes));
})




/*
console.log(clientes[0].nombre);

//modificamos el nombre del cliente 0 del Array

clientes[0].nombre="Boris";
console.log(clientes);

//Borrar el ultimo registro del Array

clientes.splice(5,1);
console.log(clientes);

//Añadimos un nuevo cliente al array
//creamos un nuevo objeto JSON
let c = {};
c = {
    dni:"888888888",
    nombre: "Paco",
    telefono: "34343434"
}
//Añadimos al final del array
clientes.push(c);

//Guardamos el array modificado en un nuevo archivo JSON
fs.writeFileSync('clientes2.json', JSON.stringify(clientes));

*/
