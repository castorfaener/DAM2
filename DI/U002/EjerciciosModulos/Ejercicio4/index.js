//importamos el modulo moment

const moment = require('moment');

//Guardamos la fecha y hora actuales
let ahora = moment();
console.log(ahora);

//Guardamos una fecha pasada
let antes = moment("07/10/2015", "DD/MM/YYYY");
console.log(antes);

//Guardamos una fecha futura
let despues = moment("19/05/2028", "DD/MM/YYYY");

//Mostramos la diferencia en años de la fecha pasada y la actual
console.log(moment.duration(ahora.diff(antes)).years());

//Mostramos la diferencia en meses
console.log(moment.duration(ahora.diff(antes)).months());


//Mostramos los años y meses que faltan para llegar de la fecha actual a la fecha futura
let futureYears = moment.duration(despues.diff(ahora)).years();
let futureMonths = moment.duration(despues.diff(ahora)).months();

console.log("Faltan " + futureYears + " años y " + futureMonths + " meses para llegar a la fecha " + despues.calendar());

//Revisamos que la fecha antigua es anterior a la actual
if(antes.isBefore(ahora)){
    console.log("La fecha " +antes.calendar() + " es anterior a " + ahora.calendar());
}

//Añadimos un mes a la fecha actual y lo mostramos formateado
let mesPosterior = ahora.add(1,"M");

console.log(mesPosterior.format("DD MM YYYY"));
