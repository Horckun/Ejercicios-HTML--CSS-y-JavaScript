// BÚSQUEDA DE UNA CADENA
// declarar variables
var cadena = "Pero no hay queja del que deja y no se enoja por las tejas que caen del tejado agotadas por viejas";
// buscar palabra en la cadena
var buscar = cadena.indexOf("no");
// MOSTRAR EN PANTALLA
document.write("En la cadena: <strong>"+cadena+"</strong>, la palabra <strong>no</strong> se encuentra en la posición "+buscar+".");
// SALTO DE LÍNEA
document.write("<hr>");
// BÚSQUEDA DE UNA CADENA
// buscar palabra en la cadena el último resultado
var buscarUl = cadena.lastIndexOf("no");
// MOSTRAR EN PANTALLA
document.write("En la cadena: <strong>"+cadena+"</strong>, la palabra <strong>no</strong> se encuentra en la posición "+buscarUl+".");
// SALTO DE LÍNEA
document.write("<hr>");
// BÚSQUEDA ENTRE UNA CADENA
// buscar carácteres en la cadena entre el inicio y fin
var entre = cadena.substring(8,80);
// MOSTRAR EN PANTALLA
document.write("En la cadena: <strong>"+cadena+"</strong>, entre la posición <strong>8</strong> y <strong>80</strong> se encuentra: "+entre+".");
// SALTO DE LÍNEA
document.write("<hr>");
// MOSTRAR TEXTO COMO ENLACE
// convierte la cadena que queramos en un enlace
var enlace = cadena.link("https://horckun.es");
// MOSTRAR EN PANTALLA
document.write("Texto en enlace: "+enlace+".");
// SALTO DE LÍNEA
document.write("<hr>");
// MOSTRAR TEXTO MINÚSCULAS
// convierte todas las letras de la cadena en minúsculas
var min = cadena.toLowerCase();
// MOSTRAR EN PANTALLA
document.write(min);
// SALTO DE LÍNEA
document.write("<hr>");
// MOSTRAR TEXTO MAYÚSCULAS
// convierte todas las letras de la cadena en mayúsculas
var may = cadena.toUpperCase();
// MOSTRAR EN PANTALLA
document.write(may);
// SALTO DE LÍNEA
document.write("<hr>");
// MOSTRAR TEXTO EN MAYOR TAMAÑO
// aumenta tamaño de texto
var grande = cadena.big();
// MOSTRAR EN PANTALLA
document.write(grande);
// SALTO DE LÍNEA
document.write("<hr>");
// MOSTRAR TEXTO EN MENOR TAMAÑO
// disminuye tamaño de texto
var peque = cadena.small();
// MOSTRAR EN PANTALLA
document.write(peque);
// SALTO DE LÍNEA
document.write("<hr>");
