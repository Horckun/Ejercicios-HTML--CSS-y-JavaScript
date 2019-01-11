function funcion() {
  // Crear matriz
  var matriz = new Array(3);

  // Asignar valor a matriz
  matriz[0] = new Array("Horckun",30,"Programador");
  matriz[1] = new Array("Javi",29,"Informático");
  matriz[2] = new Array("Fercaso",29,"Programador informático");

  // Asignar matriz a variable
  var nombre = matriz[1][0];
  var edad = matriz[2][1];
  var profesion = matriz[2][2];

  // Mostrar en pantalla
  document.write(nombre+" tiene "+edad+" y es "+profesion+".<hr>");

  // Declarar variables
  var i,j;

  // Mostrar en pantalla
  for(i = 0; i < 3; i++) {
    for(j = 0; j < 3; j++) {
      document.write(matriz[i][j]+"<br>");
    }
    document.write("<hr>");
  }
}
