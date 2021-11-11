"use strict";
var forma = document.getElementById("forma"),
    salida = document.getElementById("salidaNombre"),
    salida1 = document.getElementById("salidaSecreto"),
    salida2= document.getElementById("salidaNavegador"),
    salida3= document.getElementById("salidaEmail"),
    salida4= document.getElementById("salidaUsuario"),
    salida5= document.getElementById("salidaUrl"),
    salida6= document.getElementById("salidaTelefono"),
    salida7= document.getElementById("salidaBuscar"),
    salida8= document.getElementById("salidaVerso");

forma.addEventListener("submit", procesa, false);
function procesa(){
  var nombre = forma["nombre"].value;
  var secreto = forma["secreto"].value;
  var navegador = forma["navegador"].value;
  var email = forma["email"].value;
  var usuario = forma["usuario"].value;
  var url = forma["url"].value;
  var telefono = forma["telefono"].value;
  var buscar = forma["buscar"].value;
  var verso = forma["verso"].value;


  salida.value =  nombre;
  salida1.value = secreto;
  salida2.value =navegador;
  salida3.value =email;
  salida4.value =usuario;
  salida5.value =url;
  salida6.value =telefono;
  salida7.value =buscar;
  salida8.value =verso;
}
