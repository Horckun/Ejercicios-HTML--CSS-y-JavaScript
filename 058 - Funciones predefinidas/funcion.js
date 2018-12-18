// Funciones
function funcion() {
  // Codificar texto
  var textoCodificado = escape("Lorem ipsum dolor sit amet");

  // Mostrar texto texto codificado
  document.write(textoCodificado+"<br><br>");

  // Decodificar texto
  var textoCodificado = unescape("Lorem%20ipsum%20dolor%20sit%20amet");

  // Mostrar texto texto codificado
  document.write(textoCodificado+"<br><br>");

  // Codificar url
  var textoCodificado = encodeURI("http://fernández.es");

  // Mostrar texto texto codificado
  document.write(textoCodificado+"<br><br>");

  // Decodificar url
  var textoCodificado = decodeURI("http://fern%C3%A1ndez.es");

  // Mostrar texto texto codificado
  document.write(textoCodificado+"<br><br>");

  // Codificar url + (= & ?)
  var textoCodificado = encodeURIComponent("http://fernández=?cañadas.es");

  // Mostrar texto texto codificado
  document.write(textoCodificado+"<br><br>");

  // Decodificar url + (= & ?)
  var textoCodificado = decodeURIComponent("http%3A%2F%2Ffern%C3%A1ndez%3D%3Fca%C3%B1adas.es");

  // Mostrar texto texto codificado
  document.write(textoCodificado+"<br><br>");

  // Convertir carácter en número
  var x = 7.5;
  x++;
  document.write(x+"<br><br>");

  // Pasamos de caracter a entero
  x = parseInt(x);
  document.write(x+"<br><br>");

  // Pasamos de caracter a flotante
  x += 0.8;
  x = parseFloat(x);
  document.write(x+"<br><br>");

  // Comprobar si es número o caracter
  var comprobar = isNaN(x);
  if(comprobar == true) {
    document.write("Es texto.<br><br>");
  } else {
    document.write("Es número.<br><br>");
  }
}
