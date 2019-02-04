function mostrarDatos() {
  var nombreyApellidos = "Nombre: " + datosPersonales.nombre.value + "\n";
  nombreyApellidos += "Apellidos: " + datosPersonales.apellidos.value;

  var estadoCivil = "Estado civil: " + datosPersonales.estadoCivil.options[datosPersonales.estadoCivil.selectedIndex].text;

  var idiomas = "Idiomas: ";
  if(datosPersonales.idioma1.checked) {
    idiomas += datosPersonales.idioma1.value + ", ";
  }
  if(datosPersonales.idioma2.checked) {
    idiomas += datosPersonales.idioma2.value + ", ";
  }
  if(datosPersonales.idioma3.checked) {
    idiomas += datosPersonales.idioma3.value;
  }

  var profesion = "Profesión: ";
  var encontrado = false;
  for(var i = 0; i < datosPersonales.profesion.length && !encontrado; i++) {
    if(datosPersonales.profesion[i].checked) {
      profesion += datosPersonales.profesion[i].value;
      encontrado = true;
    }
  }

  var comentarios = "Comentarios: " + datosPersonales.comentarios.value;

  var mensajeFinal = nombreyApellidos + "\n" + estadoCivil + "\n" + idiomas + "\n" + profesion + "\n" + comentarios;

  alert(mensajeFinal);
}
