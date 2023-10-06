function soloLetras(e) {
    var key = e.keyCode || e.which,
      tecla = String.fromCharCode(key).toLowerCase(),
      letras = " áéíóúabcdefghijklmnñopqrstuvwxyz",
      especiales = [8, 37, 39, 46],
      tecla_especial = false;

    for (var i in especiales) {
      if (key == especiales[i]) {
        tecla_especial = "/^[!@#\$%\^\&*\)\(+=._-]+$/g";
        break;
      }
    }

    if (letras.indexOf(tecla) == -1 && !tecla_especial)
     {
    alert("error")
      return false;
    }
}

var SoloNumeros = document.getElementById("matricula")
SoloNumeros.addEventListener("input", function (event) {
    validarTextoEntrada(this, "[0-9]")

})
valor = document.getElementById("nombre").value;
if( valor == null || valor.length == 0 || /^\s+$/.test(valor) ) {
  return false;
}
