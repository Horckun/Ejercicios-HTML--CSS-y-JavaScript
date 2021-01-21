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
// VER TIEMPO TRANSCURRIDO EN MILISEGUNDOS DESDE 1970
// coger segundos de la fecha actual
var tiempo = fecha.getTime();
// MOSTRAR EN PANTALLA
document.write("Tiempo: "+tiempo);
// SALTO DE LÍNEA
document.write("<hr>");
// VER MES
// coger mes de la fecha actual
var mes = fecha.getMonth();
// COMPROBAR MES
if(mes == 0) {
  mes = "Enero";
}
// MOSTRAR EN PANTALLA
document.write("Mes: "+mes);
// SALTO DE LÍNEA
document.write("<hr>");
// VER AÑO
// coger año de la fecha actual
var año = fecha.getFullYear();
// MOSTRAR EN PANTALLA
document.write("Año: "+año);
// SALTO DE LÍNEA
document.write("<hr>");
// VER FECHA
// coger año de la fecha actual
var fecha2 = fecha.toLocaleString();
// MOSTRAR EN PANTALLA
document.write("Fecha: "+fecha2);
// SALTO DE LÍNEA
document.write("<hr>");
// VER GMT
// coger GMT de la fecha actual
var gmt = fecha.toGMTString();
// MOSTRAR EN PANTALLA
document.write("GMT: "+gmt);
// SALTO DE LÍNEA
document.write("<hr>");
// VER DÍA DEL MES
// coger día del mes de la fecha actual
fecha.setDate(31);
// MOSTRAR EN PANTALLA
document.write("Día y mes: "+fecha);
// SALTO DE LÍNEA
document.write("<hr>");
