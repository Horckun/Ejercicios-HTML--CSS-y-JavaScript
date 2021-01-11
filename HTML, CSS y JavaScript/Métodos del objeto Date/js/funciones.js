// VER DÍA ACTUAL
// coger fecha actual
var fecha = new Date();
// coger día de la fecha actual
var dia = fecha.getDate();
// MOSTRAR EN PANTALLA
document.write("Día del mes: "+dia);
// SALTO DE LÍNEA
document.write("<hr>");
// VER DÍA DE LA SEMANA
// coger día de la semana de la fecha actual
var diaS = fecha.getDay();
// COMPROBAR DÍA
if(diaS == 3) {
  diaS = "Miércoles";
}
// MOSTRAR EN PANTALLA
document.write("Día de la semana: "+diaS);
// SALTO DE LÍNEA
document.write("<hr>");
// VER HORA
// coger hora de la fecha actual
var hora = fecha.getHours();
// MOSTRAR EN PANTALLA
document.write("Hora: "+hora);
// SALTO DE LÍNEA
document.write("<hr>");
// VER MINUTOS
// coger minutos de la fecha actual
var minutos = fecha.getMinutes();
// MOSTRAR EN PANTALLA
document.write("Minutos: "+minutos);
// SALTO DE LÍNEA
document.write("<hr>");
// VER SEGUNDOS
// coger segundos de la fecha actual
var segundos = fecha.getSeconds();
// MOSTRAR EN PANTALLA
document.write("Segundos: "+segundos);
// SALTO DE LÍNEA
document.write("<hr>");
