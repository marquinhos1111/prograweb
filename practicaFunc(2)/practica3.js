/*
Convierte la función del ejercicio anterior a una función de flecha. 
Además, agrega una validación para que, si el array está vacío, retorna un mensaje de advertencia.

Equivalencia ---> ===

if x === 10 ...

funcion flecha, en vez de crearla como  function nombre(parametros)

const nombreFuncion = (parametros) => { código }

*/

const unidor = (array) => {

if (array.length === 0) {return "El array está vacio"}
else {return array.join(" ")}

}

array = ["marco", "maia", "garcia"]

console.log(unidor(array))
