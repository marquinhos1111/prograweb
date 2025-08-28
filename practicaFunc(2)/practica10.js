/*
Escribe una función que reciba un día de la semana (en número) y retorne el nombre del día. Usa una estructura switch.
recibe num del 1 al 7 y nombra dia - switchj

switch (variable) {
  case valor1:
    // código si variable == valor1
    break;
  case valor2:
    // código si variable == valor2
    break;
  default:
    // código si no coincide con ningún caso
*/


function numeroDia (num) {
switch(num) {

case 1:
return "Lunes"

case 2: 
return "Martes"

case 3:
return "Miercoles"

case 4: 
return "Jueves"

case 5: 
return "Viernes"

case 6: 
return "Sábado"

case 7: 
return "Domingo"
}
}

console.log(numeroDia(5))
