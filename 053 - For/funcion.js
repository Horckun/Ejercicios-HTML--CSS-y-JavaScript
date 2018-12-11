// Creamos título
document.write("<h2>Bucle For</h2><br>");

// Declaramos variable
var i,j;
// Generamos bucle for
for(i = 1; i < 6; i++) {
  document.write("Tema "+i+":<br>");
  for(j = 1; j < 6; j++) {
    document.write(" - Lección "+i+"."+j+"<br>");
  }
  document.write("<br>");
}
