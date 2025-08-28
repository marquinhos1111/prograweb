/* 

Escribe una función que tome un número como argumento y retorne su factorial. Utiliza una estructura if para manejar el caso base.

*/



function factoriador(n) {
if (n<2) {return 1}
else { return n * factoriador(n-1)
}
}

console.log(factoriador(5))
