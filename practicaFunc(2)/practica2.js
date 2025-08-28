/*

Crea una función expresada que reciba un array de strings y retorne un string que concatena 
todos los elementos del array separados por espacios.


array.join("separador")

array.join(" ") → toma todos los elementos del array y los une en un solo string, separados por espacios.

array = 


*/

function unidor(array) {
return array.join(" ")
}

elArrai = ["marco", "toyota", "etios", 10]

arraiUnido = unidor(elArrai)

console.log(arraiUnido)