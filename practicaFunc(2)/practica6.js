/*
Escribe una función que reciba cuatro argumentos
booleanos y retorne true si al menos uno de los dos primeros es
verdadero y al menos uno de los dos últimos es falso.
*/

let a = true
let b = false
let c = true 
let d = false

function funcionGede (a,b,c,d) {
if ((a || b) && (!c || !d)) {return true}  // no puedo hacer con equivalencia === por las prioridades de java, utilizo !a = not a, entonces si a existe y es true, me queda false
else {return false}
}


console.log(funcionGede(a,b,c,d))