// FUNCIONES
function mayor(x,y) {
  // DECLARAR VARIABLE
  var resultado;
  // CONDICIONAL IF ELSE
  if(x < y) {
    // ASIGNAR VALOR
    resultado = y;
  } else {
    if(x > y) {
      resultado = x;
    } else {
      resultado = 0;
    }
  }
  // DEVOLVER VALOR
  return resultado;
}
// DECLARAR VARIABLE Y ASIGNAR VALOR
var num = mayor(5,8);
// ALERTA
alert("Resultado: "+num);
