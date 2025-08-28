/*
Crea una función recursiva que calcule la suma de los números de 1 hasta n.
*/

function sumaRecursiva (num) {
if (num === 1) {return 1}
else {return sumaRecursiva(num - 1)+num}
}

console.log(sumaRecursiva(4))



// DUDA. 