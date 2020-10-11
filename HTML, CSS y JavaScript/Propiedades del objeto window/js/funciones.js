// COMPROBAR SI UNA VENTANA SE HA CERRADO O NO
if(window.close() == 0) {
  // si no se ha cerrado muestra hola
  alert("hola")
} else {
  // si se ha cerrado muestra adiós
  alert("adiós");
}
//------------------------------------------------
// VER HISTORIAL
// ver cuántas páginas se han visitado anteriormente
var historial = window.history.length;
// ver página anterior
//var historial = window.history.back();
// ver página siguiente
//var historial = window.history.forward();
// abrir una página específica
//var historial = window.history.go();
// alerta
alert(historial);
//----------------------
// GESTIONAR INFORMACIÓN
// ver información de la página actual
var gestionar = window.location;
// alerta
alert(gestionar);
//----------------------
// GESTIONAR PARENTESCO
// crear función
function funcion() {
    // establecer fondo azul
    parent.document.body.style.backgroundColor = "#0043b6";
}
// crear nueva ventana
window.open("", "", "width=200, height=100");
