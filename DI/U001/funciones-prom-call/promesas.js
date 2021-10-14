
let datos = [
    {nombre: "Nacho", telefono: "966112233", edad: 40},
    {nombre: "Ana", telefono: "911223344", edad: 35},
    {nombre: "Mario", telefono: "611998877", edad: 15},
    {nombre: "Laura", telefono: "633663366", edad: 17}
];

function nuevaPersona(persona){
    let promesaNuevaPersona = new Promise((resolve, reject) => {
        var exist = false;
        for(i=0;i<datos.length; i++){
            if(datos[i].telefono.localeCompare(persona.telefono)==0){
            
                exist=true;
                reject("El telefono ya existe");
            }
        }
        if(exist==false){
            datos.push(persona);
            resolve(persona);
        }
    });
  
};

function borrarPersona(telefono){
    datos = datos.filter(persona => persona.telefono!=telefono);
}