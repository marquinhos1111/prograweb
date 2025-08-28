/*
Crea una función que salude a una persona. Si no se proporciona el nombre, debe saludar con "Hola, invitado".

si no se pone un parametro a la funcion, es undefined --->    funcionX(a)    --->    console.log(funcionX(....)) el espacio de los puntos vacio, cuenta como UNDEFINED
*/



function saludador(nombre) {
if (nombre === undefined) {return "Hola, invitado"}
else {return "Hola "+ nombre + " como estas?"}
}

console.log(saludador("Marco"))