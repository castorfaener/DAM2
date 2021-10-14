
//importamos el modulo lodash
const lod = require('lodash');

let personas = ["Nacho","Ana","Mario","Laura"];

//Separamos los elementos del array separados por ', '
let resultado = lod.join(personas,', ');
console.log(resultado);