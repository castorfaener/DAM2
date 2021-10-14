//Creamos el array inicial

let datos = [
    {nombre: "Nacho", telefono: "966112233", edad: 40},
    {nombre: "Ana", telefono: "911223344", edad: 35},
    {nombre: "Mario", telefono: "611998877", edad: 17},
    {nombre: "Laura", telefono: "633663366", edad: 15},
];

console.log(datos);

//Añadimos dos elementos más al final

datos.push({nombre: "Pedro", telefono: "611944444", edad: 25},
{nombre: "Julia", telefono: "633232323", edad: 37});

console.log(datos);

//Ordenamos por edad

datos.sort(function(a, b){
    return(a.edad - b.edad);
});

console.log(datos);

//Ordenamos por nombre

datos.sort(function(a, b){
    return(a.nombre.localeCompare(b.nombre));
});

console.log(datos);

//Creamos un array conlos mayores de 30 años

let treinta = datos.filter(function(num){
    
    return (num.edad > 30);
});

console.log(treinta);