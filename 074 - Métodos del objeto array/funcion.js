function funcion() {
  // Declaramos dos arrays
  var vector1 = new Array("Horckun");
  var vector2 = new Array("1989");

  // Unimos los dos arrays
  var vector = vector1.concat(vector2);

  // Mostramos en pantalla
  document.write(vector+"<hr>");

  // Indicamos separador
  var separar = vector.join(" - ");

  // Mostramos en pantalla
  document.write(separar+"<hr>");

  // Ivertimos orden
  var invertir = vector.reverse();

  // Mostramos en pantalla
  document.write(invertir+"<hr>");

  // Ordenar de menos a mayor
  var ordenar = vector.sort();

  // Mostramos en pantalla
  document.write(ordenar+"<hr>");
}
