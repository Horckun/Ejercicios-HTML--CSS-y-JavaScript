function funcion() {
  // Inicializamos el array
  var vector = new Array("Horckun","programador",29,"Francia");

  // Asignamos variable a la primera posición del vector
  var nombre = vector[0];

  // Asignamos variable a la segunda posición del vector
  var profesion = vector[1];

  // Asignamos variable a la tercera posición del vector
  var edad = vector[2];

  // Asignamos variable a la cuarta posición del vector
  var pais = vector[3];

  // Mostramos en pantalla
  document.write(nombre+" es un "+profesion+" de "+edad+" años que vive en "+pais+".<hr>");

  // Cramos array vacío
  var vector = new Array();

  // Declaramos variable
  var i;

  // Generamos bucle for para solicitar 3 números
  for(i = 0; i < 3; i++) {
    vector[i] = prompt("Introduce un número para el vector "+(i+1)+":");
  }

  // Mostramos en pantalla
  document.write("En la primera posición del vector se encuentra el número: "+vector[0]+"<br>");
  document.write("En la segunda posición del vector se encuentra el número: "+vector[1]+"<br>");
  document.write("Y en la tercera posición del vector se encuentra el número: "+vector[2]+"<br>");
}
