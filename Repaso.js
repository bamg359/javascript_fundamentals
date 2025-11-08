


let myVar ="Hello, World!";

var otherVar = 42;

const anotherVar = true;


typeof myVar; // "string"
typeof otherVar; // "number"
typeof anotherVar; // "boolean"

// Tipos de datos 

// String 
let nombre = "Juan";
let saludo = 'Hola';

// Number
let edad = 30;
let precio = 19.99;

// Boolean
let esEstudiante = true;
let tieneTrabajo = false;

// Bigint
let bigNumber = 9007199254741991n;

// Undefined
let indefinido;

let edad2 = "";

// Null
let valorNulo = null;

// Symbol
let simbolo = Symbol("miSimbolo");

// Object
let persona = {
    nombre: "Ana",
    edad: 25
};



// Crear un objeto con los datos de un prod; id, nombre , precio, cantidad , disponibilidad 

let producto = {

    id:1,
    nombre: "Café",
    precio: 18500,
    cantidad: 50,
    disponibilidad: true
}

// Arrays 

let frutas = ["Manzana", "Banana", "Cereza", "Durazno"];

const userInfo = [1, "Pepe", 1982, 42, false, frutas, producto];
//               0    1       2     3    4     5       6    

//console.log(userInfo);

frutas.push("Mango");

frutas[2] = "Fresa";

frutas.push("Mora");

//console.log(frutas);


const courseData = new Array("JavaScript", "Python", "Java", "C++");

const courseSet = new Set(["JavaScript", "Python", "Java", "C++", "JavaScript"]);

const courseMap = new Map([
    ["LenArray", courseData],
    ["LenSet", courseSet],
    ["Len3", userInfo],
    ["Len4", producto]
]);

//console.log(courseMap);

console.log(courseMap.get("Len4"));
