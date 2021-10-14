//obtener referencia al div datos
let mDiv=document.getElementById("datos");
//modificar el html de datos
mDiv.innerHTML="<p> Contenido del div </p>";

//Crear un botón 
let button = document.createElement("button");
//text del botón
button.textContent="Button";
//añadir el botón al final del documento
document.body.appendChild(button);

//manejar evento click del botón:
button.addEventListener('click',()=>{
    alert('Button Click!!!');
})