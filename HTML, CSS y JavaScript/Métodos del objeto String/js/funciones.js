// BÚSQUEDA DE UNA CADENA
// declarar variables
var cadena = "Pero no hay queja del que deja y no se enoja por las tejas que caen del tejado agotadas por viejas";
// buscar palabra en la cadena
var buscar = cadena.indexOf("no");
// MOSTRAR EN PANTALLA
document.write("En la cadena: <strong>"+cadena+"</strong>, la palabra <strong>tejas</strong> se encuentra en la posición "+buscar+".");
// SALTO DE LÍNEA
document.write("<hr>");
// BÚSQUEDA DE UNA CADENA
// buscar palabra en la cadena el último resultado
var buscarUl = cadena.lastIndexOf("no");
// MOSTRAR EN PANTALLA
document.write("En la cadena: <strong>"+cadena+"</strong>, la palabra <strong>tejas</strong> se encuentra en la posición "+buscarUl+".");
// SALTO DE LÍNEA
document.write("<hr>");
