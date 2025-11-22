


// Calcular el valor de un viaje teniendo en cuenta la distancia
// # personas
// numero de dias

const datosViajeros = [[100, 3, 5],[130, 2, 4]]; // distancia, numPersonas, numDias

let distancia = datosViajeros[0];
let numPersonas = datosViajeros[1];
let numDias = datosViajeros[2];

function calcularCostoViaje(distancia, numPersonas, numDias){
    
    let costoPorKm = 10500;
    let costoPorPersona = 200000;
    let costoPorDia = 20000;

    let costoTotal = (distancia * costoPorKm) + (numPersonas * costoPorPersona) + (numDias * costoPorDia);

    return costoTotal;
}


let costoTotal = calcularCostoViaje(distancia, numPersonas, numDias);

console.log("El costo total del viaje es: " + costoTotal);