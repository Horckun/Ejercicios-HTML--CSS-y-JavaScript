// CREAR ARRAY
// declarar variables y asignarle vectores
var vector = new Array("Horckun","programador","informático");
var vector2 = new Array(32,"Bordeaux");
// declarar variable final y juntar las dos anteriores
var vectorFinal = vector.concat(vector2);
// mostrar en pantalla
document.write("El vector final sería: "+vectorFinal+".<hr>");
// elegir otro carácter para separar contenido de array
var separar = vectorFinal.join(" ");
// mostrar en pantalla
document.write("El nuevo separador es: "+separar+".<hr>");
// invertir el orden del contenido
var inversa = vectorFinal.reverse();
// mostrar en pantalla
document.write("El nuevo orden es: "+inversa+".<hr>");
