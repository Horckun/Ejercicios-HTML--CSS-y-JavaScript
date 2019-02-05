function activarEstadoCivil() {
  var sexo = datosPersonales.sexo.options[datosPersonales.sexo.selectedIndex].value;
  if(sexo == 2) {
    document.getElementsById('estadoCivil').disabled = false;
  } else {
    document.getElementsById('estadoCivil').disabled = true;
  }
}

function calcularTasas() {
  var valorProfesion = "";
  var encontrado = false;
  for(var i = 0; i < datosPersonales.profesion.length && !encontrado; i++) {
    if(datosPersonales.profesion[i].checked) {
      valorProfesion = datosPersonales.profesion[i].value;
      encontrado = true;
    }
  }
  switch (valorProfesion) {
    case "autonomo":
      datosPersonales.tasas.value = "15€";
      break;
    case "ajena":
      datosPersonales.tasas.value = "20€";
      break;
    case "paro":
      datosPersonales.tasas.value = "2€";
      break;
    case "jubilado":
      datosPersonales.tasas.value = "5€";
      break;
  }
}

function mostrarMensaje() {
  var nombreyApellidos = "Nombre: " + datosPersonales.nombre.value + "\n";
  nombreyApellidos += "Apellidos: " + datosPersonales.apellidos.value;

  var mensajeFinal = nombreyApellidos + "\nTasas: " + datosPersonales.tasas.value;

  alert(mensajeFinal);
}
