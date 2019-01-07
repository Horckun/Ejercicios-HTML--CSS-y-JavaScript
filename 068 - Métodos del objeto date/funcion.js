function funcion() {
  // Día del mes
  var fecha = new Date();
  document.write("Día del mes: "+fecha.getDate()+"<br>");

  // Día de la semana
  var fecha = new Date();
  document.write("Día de la semana: "+fecha.getDay()+"<br>");

  // Hora del día
  var fecha = new Date();
  document.write("Hora del día: "+fecha.getHours()+"<br>");

  // Minutos de la hora
  var fecha = new Date();
  document.write("Minutos de la hora: "+fecha.getMinutes()+"<br>");

  // Segundos de los minutos
  var fecha = new Date();
  document.write("Segundos de los minutos: "+fecha.getSeconds()+"<br>");

  // Milisegundos de los segundos
  var fecha = new Date();
  document.write("Milisegundos de los segundos: "+fecha.getTime()+"<br>");

  // Mes del año
  var fecha = new Date();
  document.write("Mes del año: "+fecha.getMonth()+"<br>");

  // Año
  var fecha = new Date();
  document.write("Año: "+fecha.getFullYear()+"<br>");

  // Fecha y zona horaria
  var fecha = new Date();
  document.write("Fecha y zona horaria: "+fecha.toLocaleString()+"<br>");

  // GMT
  var fecha = new Date();
  document.write("Fecha y zona horaria: "+fecha.toGMTString()+"<br>");

  // Día del mes
  var fecha = new Date();
  fecha.setDate(27);
  document.write("Día del mes: "+fecha+"<br>");

  // Hora del día
  var fecha = new Date();
  fecha.setHours(8);
  document.write("Hora del día: "+fecha+"<br>");

  // Minutos de las horas
  var fecha = new Date();
  fecha.setMinutes(8);
  document.write("Minutos de las horas: "+fecha+"<br>");

  // Mes del año
  var fecha = new Date();
  fecha.setMonth(8);
  document.write("Mes del año: "+fecha+"<br>");

  // Segundos de minutos
  var fecha = new Date();
  fecha.setSeconds(8);
  document.write("Segundos de minutos: "+fecha+"<br>");

  // Año
  var fecha = new Date();
  fecha.setYear(2028);
  document.write("Año: "+fecha+"<br>");

  // Milisegundos de segundos
  var fecha = new Date();
  fecha.setTime(2028);
  document.write("Milisegundos de segundos: "+fecha+"<br>");
}
