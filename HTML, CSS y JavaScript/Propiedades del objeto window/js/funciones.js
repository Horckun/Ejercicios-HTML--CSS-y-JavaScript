// COMPROBAR SI UNA VENTANA SE HA CERRADO O NO
if(window.close() == 0) {
  // SI SE HA CERRADO MUESTRA HOLA
  alert("hola")
} else {
  // SI SE HA CERRADO MUESTRA ADIÓS
  alert("adiós");
}
//------------------------------------------------
// VER HISTORIAL
// ver cuántas páginas se han visitado anteriormente
//var historial = window.history.length;
// ver página anterior
//var historial = window.history.back();
// ver página siguiente
//var historial = window.history.forward();
// abrir una página específica
var historial = window.history.go();
// alerta
alert(historial);
