// Condicional si x es menor que 10 y mayor que 0, y sino, se ejecuta otra acción
var x = 29;
if(x < 10 && x > 0) {
  // Escribimos en el documento HTML
  document.write("El número no es 8.");
  // En caso que no se cumpla la condicion...
} else {
  document.write("<br>El número es: "+x);
  // Condicioal if anidada
  if(x > 10) {
    document.write("<br>El número es mayor que 10.\n");
  }
}
