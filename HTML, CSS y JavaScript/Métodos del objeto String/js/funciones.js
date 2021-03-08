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
// declarar variable
var buscarUl = cadena.lastIndexOf("no");
// MOSTRAR EN PANTALLA
document.write("En la cadena: <strong>"+cadena+"</strong>, la palabra <strong>no</strong> se encuentra en la posición "+buscarUl+".");
// SALTO DE LÍNEA
document.write("<hr>");
// BÚSQUEDA ENTRE UNA CADENA
// declarar variable
var entre = cadena.substring(8,80);
// MOSTRAR EN PANTALLA
document.write("En la cadena: <strong>"+cadena+"</strong>, entre la posición <strong>8</strong> y <strong>80</strong> se encuentra: "+entre+".");
// SALTO DE LÍNEA
document.write("<hr>");
// MOSTRAR TEXTO COMO ENLACE
// declarar variable
var enlace = cadena.link("https://horckun.es");
// MOSTRAR EN PANTALLA
document.write("Texto en enlace: "+enlace+".");
// SALTO DE LÍNEA
document.write("<hr>");
// MOSTRAR TEXTO MINÚSCULAS
// declarar variable
var min = cadena.toLowerCase();
// MOSTRAR EN PANTALLA
document.write(min);
// SALTO DE LÍNEA
document.write("<hr>");
// MOSTRAR TEXTO MAYÚSCULAS
// declarar variable
var may = cadena.toUpperCase();
// MOSTRAR EN PANTALLA
document.write(may);
// SALTO DE LÍNEA
document.write("<hr>");
// MOSTRAR TEXTO EN MAYOR TAMAÑO
// declarar variable
var grande = cadena.big();
// MOSTRAR EN PANTALLA
document.write(grande);
// SALTO DE LÍNEA
document.write("<hr>");
// MOSTRAR TEXTO EN MENOR TAMAÑO
// declarar variable
var peque = cadena.small();
// MOSTRAR EN PANTALLA
document.write(peque);
// SALTO DE LÍNEA
document.write("<hr>");
// MOSTRAR TEXTO EN CURSIVA
// declarar variable
var cursiva = cadena.italics();
// MOSTRAR EN PANTALLA
document.write(cursiva);
// SALTO DE LÍNEA
document.write("<hr>");
// MOSTRAR TEXTO TACHADO
// declarar variable
var tachado = cadena.strike();
// MOSTRAR EN PANTALLA
document.write(tachado);
// SALTO DE LÍNEA
document.write("<hr>");
// MOSTRAR TEXTO EN SUPERÍNDICE
// declarar variable
var sup = cadena.sup();
// MOSTRAR EN PANTALLA
document.write("Superíndice: "+sup);
// SALTO DE LÍNEA
document.write("<hr>");
// MOSTRAR TEXTO EN SUBÍNDICE
// declarar variable
var sub = cadena.sub();
// MOSTRAR EN PANTALLA
document.write("Subíndice: "+sub);
// SALTO DE LÍNEA
document.write("<hr>");
// ENCONTRAR CARÁCTER
// declarar variable
var encontrar = cadena.charAt(8);
// MOSTRAR EN PANTALLA
document.write("Carácter en la posición 8: "+encontrar);
// SALTO DE LÍNEA
document.write("<hr>");
// ASIGNAR COLOR
// declarar variable
var color = cadena.fontcolor("#0043b6");
// MOSTRAR EN PANTALLA
document.write(color);
// SALTO DE LÍNEA
document.write("<hr>");
