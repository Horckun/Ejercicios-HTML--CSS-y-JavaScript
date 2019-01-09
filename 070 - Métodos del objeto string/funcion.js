function funcion() {
  // Buscar una palabra desde el inicio
  var cadena = "Be the change you want to see in the world!";
  var buscar = cadena.indexOf("change");
  document.write("Vamos a buscar la palabra 'change' en la frase: "+cadena+"<br>");
  document.write("La palabra 'change' se encuentra en la posición "+buscar+" de todo el documento empezando por el inicio.<br><hr>");

  // Buscar una palabra de la última correspondencia
  var cadena = "Be the change you want to see in the world!";
  var buscar = cadena.lastIndexOf("want");
  document.write("Vamos a buscar la palabra 'want' en la frase: "+cadena+"<br>");
  document.write("La palabra 'change' se encuentra en la posición "+buscar+" de todo el documento empezando por el final.<br><hr>");

  // Buscar las palabras encontradas alrededor de la palabra a buscar
  var cadena = "Be the change you want to see in the world!";
  var buscar = cadena.substring("want");
  document.write("Vamos a buscar las palabras encontradas alrededor de la palabra 'want' en la frase: "+cadena+"<br>");
  document.write(buscar+"<br><hr>");

  // Convertir frase o palabra en enlace
  var cadena = "Be the change you want to see in the world!";
  var buscar = cadena.link("http://horckun.es");
  document.write(buscar+"<br><hr>");

  // Convertir frase o palabra en minúscula
  var cadena = "Be the change you want to see in the world!";
  var buscar = cadena.toLowerCase();
  document.write(buscar+"<br><hr>");

  // Convertir frase o palabra en mayúsculas
  var cadena = "Be the change you want to see in the world!";
  var buscar = cadena.toUpperCase();
  document.write(buscar+"<br><hr>");

  // Cambiar frase o palabra en gran tamaño
  var cadena = "Be the change you want to see in the world!";
  var buscar = cadena.big();
  document.write(buscar+"<br><hr>");

  // Cambiar frase o palabra en menor tamaño
  var cadena = "Be the change you want to see in the world!";
  var buscar = cadena.small();
  document.write(buscar+"<br><hr>");

  // Cambiar frase o palabra en parpadeo
  var cadena = "Be the change you want to see in the world!";
  var buscar = cadena.blink();
  document.write(buscar+"<br><hr>");

  // Cambiar frase o palabra en cursiva
  var cadena = "Be the change you want to see in the world!";
  var buscar = cadena.italics();
  document.write(buscar+"<br><hr>");

  // Cambiar frase o palabra en tachado
  var cadena = "Be the change you want to see in the world!";
  var buscar = cadena.strike();
  document.write(buscar+"<br><hr>");

  // Cambiar frase o palabra en superíndice
  var cadena = "Be the change you want to see in the world!";
  var buscar = cadena.sup();
  document.write(buscar+"<br><hr>");

  // Cambiar frase o palabra en subíndice
  var cadena = "Be the change you want to see in the world!";
  var buscar = cadena.sub();
  document.write(buscar+"<br><hr>");

  // Buscar caracter
  var cadena = "Be the change you want to see in the world!";
  var buscar = cadena.charAt(8);
  document.write(buscar+"<br><hr>");

  // Cambiar de color
  var cadena = "Be the change you want to see in the world!";
  var buscar = cadena.fontcolor("#0043b6");
  document.write(buscar+"<br><hr>");

  // Cambiar tamaño entre 1 y 7
  var cadena = "Be the change you want to see in the world!";
  var buscar = cadena.fontsize("7");
  document.write(buscar+"<br><hr>");
}
