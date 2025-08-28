/*

Escribe una función que tome una temperatura en grados Celsius 
como argumento y devuelva un mensaje que indique si hace frío 
(menor a 15 grados), templado (entre 15 y 25 grados) o calor (mayor a 25 grados).


*/

const comoEstaHoy = (temperatura) => {

    if (temperatura<15) {return "Hace frío"}
    else if (15<temperatura<25) {return "Está templado"}
    else {return "Hace calor"}
}

temperatura = 18

console.log(comoEstaHoy(temperatura))
