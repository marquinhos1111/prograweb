/*
Declara tres variables booleanas y usa operadores 
lógicos para verificar si al menos dos son verdaderas. 
Imprime true o false en la consola dependiendo del resultado.





&& (AND): es true solo si los dos son true.

|| (OR): es true si al menos uno es true.

! (NOT): invierte el valor → !true = false.

*/


let var1 = true

let var2 = false

let var3 = true

// Verificamos si al menos 2 de las variables son verdaderas

let resultado = (var1 && var2) || (var2 && var3) || (var1 && var3)

console.log(resultado)