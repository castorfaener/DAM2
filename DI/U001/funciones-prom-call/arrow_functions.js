let datos = [
    {nombre: "Nacho", telefono: "966112233", edad: 40},
    {nombre: "Ana", telefono: "911223344", edad: 35},
    {nombre: "Mario", telefono: "611998877", edad: 15},
    {nombre: "Laura", telefono: "633663366", edad: 17}
];

nuevaPersona({nombre: "Juan", telefono:"911223344", edad: 60});
nuevaPersona({nombre: "Rodolfo", telefono:"910011001", edad: 20});
borrarPersona("910011001");
console.log(datos);

function nuevaPersona(persona){
    var exist = false;
    for(i=0;i<datos.length; i++){
        if(datos[i].telefono.localeCompare(persona.telefono)==0){
            
            console.log("El telefono ya existe");
            exist=true;
        }
    }
    if(exist==false){
        datos.push(persona);
        console.log("Se ha añadido el registro");
    }
        
}

function borrarPersona(telefono){
    
    var exist = false;
    for(i=0;i<datos.length; i++){
        if(datos[i].telefono.localeCompare(persona.telefono)==0){
            
            console.log("El telefono ya existe");
            datos = datos.filter(persona => persona.telefono!=telefono);
            exist=true;
        }
    }
    if(exist==false){
        datos.push(persona);
        console.log("Se ha añadido el registro");
    }
    
    
    
}