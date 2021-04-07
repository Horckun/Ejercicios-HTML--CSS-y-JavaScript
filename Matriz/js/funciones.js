// CREAR MATRIZ
// declarar variables de matriz
var matriz = new Array(2);
// declarar matrices y asignar valores
matriz[0] = new Array("Horckun",32,"Programador");
matriz[1] = new Array("Javier",32,"Informático");
// declarar variable de bucle
var i,j;
// bucles for anidados
// bucle i
for(i = 0; i < 3; i++) {
  // bucle j
  for(j = 0; j < 3; j++) {
    // mostrar en pantalla
    document.write(matriz[i][j]+" ");
  }
  // salto de línea
  document.write("<hr>");
}
