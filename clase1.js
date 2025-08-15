
let nombre = "Esteban";

let edad = 32;



let profesor = true

const PI = 3.14
PI += 1

console.log(PI)


// array = conjunto de valores

/*
JavaScript
Manejo de variables

Let  — Utilizado para crear una variable

Si indicamos:
let --> crea variables modificables
push = append de python

*/

//CONST --> CREA VARIABLES / ARRAY NO MODIFICABLES
const VARIABLE = 1   // no podemos modificarla

const array = [1, 2, 3, 4, 5];
array.push(6); // agrega un elemento al final del array

//creo arrays con const

const ARRAY1 = []
ARRAY1.push(1) //agrega 1 al array


//Objetos literales = diccionarios en python

let alumno1 = {
    nombre: "Marco", 
    apellido: "Kirsman",
    edad: 19,
    deuda: False}

console.log (alumno.nombre)
//para referirme a un valor dentro de un diccionario --> (diccionario.ubicacion)


let alumno2 = {
    nombre: "mateo", 
    apellido: "quintero",
    edad: 21,
    deuda: True}

let alumno3 = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 22,}


//ARRAY DE OBJETOS LITERALES, ARRAY CON DICCIONARIOS DENTRO

const clase = [alumno1, alumno2, alumno3];
console.log(clase[0].nombre) //Va a mostrarme "Marco"

//console.log("1"+1) => 11
//console.log(1+1) => 2
//console.log("2"-1) => 1

//OPERADORES ARITMETICOS

console.log("2" == 2) // Compara valor, no tipo

console.log("2" === 2) // Compara valor y tipo

// distinto valor !=
// distinto valor y tipo !==

console.log("perro")

// AND
console.log("perro" && "gato")
//OR
console.log("perro" || "gato")

// Parser CASTEAR
// "2" > int("2")

console.log(Number("2"))
let numeroEntero =  2
console.log( numeroEntero = String(numeroEntero) )
console.log(typeof(numeroEntero))

