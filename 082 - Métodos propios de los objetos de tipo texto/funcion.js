// ESPAÑOL: Declarar variables
// ENGLISH: Declare variables
// FRANÇAIS: Déclarer des variables

// Perder foco | Losing focus | Perdre le focus
var nombre = datosPersonales.nombre.blur();
// Poner foco | Put focus | Mettre l'accent
var apellidos = datosPersonales.apellidos.focus();
// Selecciona todo el texto | Select all text | Sélectionner tout le texte
var comentarios = datosPersonales.comentarios.select();

// ESPAÑOL: Crear función e inserción de variables
// ENGLISH: Function creation and data insertion
// FRANÇAIS: Création de fonction et insertion de données
function funcion() {
  nombre = "Horckun";
  document.write("Nombre: " + nombre + ".<br>");
  apellidos = "Fercaso";
  document.write("Apellidos: " + apellidos + ".<br>");
  comentarios = "Síguenos";
  document.write("Comentarios: " + comentarios + ".<br>");
}
