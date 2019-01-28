// ESPAÑOL: Declarar variables
// ENGLISH: Declare variables
// FRANÇAIS: Déclarer des variables

// Perder foco | Losing focus | Perdre le focus
var nombre = datosPersonales.nombre.blur();
// Valor seleccionado | Selected value | Valeur sélectionnée
var valorSeleccionado = datosPersonales.apellidos.estadoCivil.options[datosPersonales.estadoCivil.selectedIndex].value;
// Texto seleccionado | Selected text | Texte sélectionné
var textoSeleccionado = datosPersonales.apellidos.estadoCivil.options[datosPersonales.estadoCivil.selectedIndex].text;

// ESPAÑOL: Crear función e inserción de variables
// ENGLISH: Function creation and data insertion
// FRANÇAIS: Création de fonction et insertion de données
function funcion() {
  nombre = "Horckun";
  document.write("Nombre: " + nombre + ".<br>");
  document.write("Valor seleccionado: " + valorSeleccionado + ".<br>");
  document.write("Texto seleccionado: " + textoSeleccionado + ".<br>");
}
