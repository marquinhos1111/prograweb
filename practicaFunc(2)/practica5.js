/*


Reescribe una función que tome una hora (formato 24 horas) y 
devuelva "Buenos días" si es antes de las 12, "Buenas tardes" si es entre las 
12 y 18, o "Buenas noches" si es después de las 18, utilizando operadores ternarios.


condición ? valorSiVerdadero : valorSiFalso

else ---> : resultado

*/



const buenosQue = (hora) => {

return hora<12? "Buenos días"
:12<hora && hora<18? "Buenas tardes"   // en JavaScript 1<A<5 es distinto de 1<A && A<5, eso es lo correcto
: "Buenas noches"
}

console.log(buenosQue(20))

