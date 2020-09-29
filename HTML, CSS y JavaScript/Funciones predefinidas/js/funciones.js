var evaluar = escape("Horckun: informática y programación.");
document.write(evaluar);
document.write("<br>");
var evaluar = unescape("Horckun%3A%20inform%E1tica%20y%20programaci%F3n.");
document.write(evaluar);
document.write("<hr>");
var evaluar = encodeURI("http://localhost/HTML, CSS y JavaScript/Funciones predefinidas/");
document.write(evaluar);
document.write("<hr>");
var evaluar = decodeURI("http://localhost/HTML,%20CSS%20y%20JavaScript/Funciones%20predefinidas/");
document.write(evaluar);
document.write("<hr>");
// DECLARAR VARIABLE
var evaluar = encodeURIComponent("http://localhost/HTML, CSS y JavaScript/Funciones predefinidas/");
// MOSTRAR EN PANTALLA
document.write(evaluar);
//----------------------
document.write("<hr>");
// DECLARAR VARIABLE
var evaluar = decodeURIComponent("http%3A%2F%2Flocalhost%2FHTML%2C%20CSS%20y%20JavaScript%2FFunciones%20predefinidas%2F");
// MOSTRAR EN PANTALLA
document.write(evaluar);
