// Devuelve número de opciones disponibles | Returns number of options available | Renvoie le nombre d'options disponibles
var longitud = datosPersonales.estadoCivil.length;
// Devuelve array con opciones | Returns array with options | Retourne un tableau avec des options
var opciones = datosPersonales.estadoCivil.options;
// Posición de opcion seleccionada | Selected option position | Position d'option sélectionnée
var posicion = datosPersonales.estadoCivil.selectedIndex;
// Si fue definida por defecto la opción | If the option was defined by default | Si l'option a été définie par défaut
var defecto = datosPersonales.estadoCivil.options[datosPersonales.estadoCivil.selectedIndex].defaultSelected;
// Valor de la opción | Value of the option | Valeur de l'option
var valor = datosPersonales.estadoCivil.options[datosPersonales.estadoCivil.selectedIndex].value;
// Texto asociado al valor | Text associated with the value | Texte associé à la valeur
var texto = datosPersonales.estadoCivil.options[datosPersonales.estadoCivil.selectedIndex].text;
// Posición de la opción | Position of the option | Position de l'option
var posicion2 = datosPersonales.estadoCivil.options[datosPersonales.estadoCivil.selectedIndex].index;
function funcion() {
  document.write("Longitud: " + longitud + ".<br>");
  document.write("Opciones: " + opciones + ".<br>");
  document.write("Posición: " + posicion + ".<br>");
  document.write("Defecto: " + defecto + ".<br>");
  document.write("Valor: " + valor + ".<br>");
  document.write("Texto: " + texto + ".<br>");
  document.write("Posición: " + posicion2 + ".<br>");
}
