const ruta = '/home/pakels';
//importamos el modulo fs
const fs = require('fs');

//mostramos todos los ficheros dentro de la ruta especificada
fs.readdirSync(ruta).forEach(fichero => {console.log(fichero);});