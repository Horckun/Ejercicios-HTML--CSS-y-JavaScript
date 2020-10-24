// ABRIR URL
// abrir web en una nueva pestaña
window.open("https://horckun.es","Nueva pestaña");
// ABRIR VENTANA NUEVA
// abrir web en una nueva ventana con altura y anchura específica
window.open("https://horckun.es","Ventana","height=600,width=300");
// DECLARAR VARIABLE GLOBAL
var horckun;
// CREAR FUNCIÓN
function abrir() {
  // abrir web en nueva ventana
  horckun = window.open("https://horckun.es","Ventana","height=600,width=300");
}
// CREAR FUNCIÓN
function cerrar() {
  // cerrar web de nueva ventana
  horckun.close();
}
