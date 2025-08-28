
/*
Escribe una función que tome tres números como argumentos y retorne el mayor de ellos. 
Llama a la función con diferentes valores e imprime el resultado.


ESTRUCTURA FUNCIONES

function myFunction(p1, p2) {
  return p1 * p2;
}


&& and
|| or
! not


*/

function laPrimera(a,b,c) 
{
if (a>b && a>c) {return a}
else if (b>c && b>a) {return b}
else {return c}
}

let valorAlto = laPrimera(1456,2345345,3345345)

console.log(valorAlto)