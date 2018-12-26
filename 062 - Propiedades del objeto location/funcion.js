function funcion() {
  // Mostrar servidor
  var servidor = location.host;
  document.write("Servidor: "+servidor+"<br>");

    // Mostrar dominio
  var dominio = location.hostname;
  document.write("Dominio: "+dominio+"<br>");

    // Mostrar puerto
  var puerto = location.port;
  document.write("Puerto: "+puerto+"<br>");

    // Mostrar protocolo
  var protocolo = location.protocol;
  document.write("Protocolo: "+protocolo+"<br><br>");

    // Mostrar URL
  var url = location.href;
  document.write("URL: "+url+"<br><br>");

    // Modificar URL
  //location.href="http://horckun.es";

    // Recurso del servidor
  var recurso = location.pathname;
  document.write("Recurso: "+recurso+"<br>");
}
