setTimeout(function(){
    console.log("Finalizado Callback");
}, 2000);

console.log("Hola");

let datos = [
    {nombre: "Nacho", telefono: "966112233", edad: 40},
    {nombre: "Ana", telefono: "911223344", edad: 35},
    {nombre: "Mario", telefono: "611998877", edad: 15},
    {nombre: "Laura", telefono: "633663366", edad: 17}
];
let promesaMayoresDeEdad = listado => {
    return new Promise((resolve, reject) => {
    let resultado = listado.filter(persona => persona.edad >= 
    18);
    if (resultado.length > 0)
    resolve(resultado);
    else
    reject("No hay resultados");
    });
    };

promesaMayoresDeEdad(datos).then(resultado => {
    // Si entramos aquí, la promesa se ha procesado bien
    // En "resultado" podemos acceder al resultado obtenido
    console.log("Coincidencias encontradas:");
    console.log(resultado);
    }).catch(error => {
    // Si entramos aquí, ha habido un error al procesar la promesa
    // En "error" lo podemos consultar
    console.log("Error:", error);
    });