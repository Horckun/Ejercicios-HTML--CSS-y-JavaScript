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
var evaluar = encodeURIComponent("http://localhost/HTML, CSS y JavaScript/Funciones predefinidas/");
document.write(evaluar);
document.write("<hr>");
var evaluar = decodeURIComponent("http%3A%2F%2Flocalhost%2FHTML%2C%20CSS%20y%20JavaScript%2FFunciones%20predefinidas%2F");
document.write(evaluar);
//----------------------
document.write("<hr>");
// DECLARAR VARIABLE
var texto = "28";
// MOSTRAR EN PANTALLA
document.write("Texto: "+(texto+1));
document.write("<br>");
// CAMBIAR A NÚMERO
var numero = parseInt(texto);
// MOSTRAR EN PANTALLA
document.write("Numero: "+(numero+1));
//----------------------
document.write("<hr>");
// DECLARAR VARIABLE
var texto = "28";
// MOSTRAR EN PANTALLA
document.write("Texto: "+(texto+0.1));
document.write("<br>");
// CAMBIAR A NÚMERO
var numero = parseFloat(texto);
// MOSTRAR EN PANTALLA
document.write("Numero: "+(numero+0.1));
