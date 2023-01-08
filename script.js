function soloLetras(texto){

        key = texto.keyCode || texto.which;
        tecla = String.fromCharCode(key).toString();
        letras = "abcdefghijklmnñopqrstuvwxyz"


        teclasEspeciales = [8,13,32];
        teclaEspecial = false;
        for (var x = 0; x < teclasEspeciales.length; x += 1){

            if(key == teclasEspeciales[x]){

                    teclaEspecial = true;
                    break;         }
        }


        if(letras.indexOf(tecla) == -1 && !teclaEspecial){

            alert("Debe ingresar solo letras en minúsculas, sin acentos y/o caracteres especiales.");
            return false;

        }  
}

function encriptar(){

      
    var encriptarTexto = document.getElementById("textoEncriptar").value;
    var textEncriptado = encriptarTexto.replace(/e/img, "enter");
    var textEncriptado = textEncriptado.replace(/o/img, "ober");
    var textEncriptado = textEncriptado.replace(/i/img, "imes");
    var textEncriptado = textEncriptado.replace(/a/img, "ai");
    var textEncriptado = textEncriptado.replace(/u/img, "ufat");

   /* document.getElementById("imgDesencriptar").style.display="none";
    document.getElementById("textoDesencriptar").style.display="none";*/
    document.getElementById("resultadoEncriptado").innerHTML = textEncriptado;
    document.getElementById("copiar").style.display="show";
    document.getElementById("copiar").style.display="inherit";
    
    document.getElementById("desencriptar").disabled = false;
    document.getElementById("limpiarTexto").disabled = false;

}

function desencriptar(){

    var desencriptarTexto = document.getElementById("textoEncriptar").value;

    var textoDesencriptado = desencriptarTexto.replace(/enter/img, "e");
    var textoDesencriptado = textoDesencriptado.replace(/ober/img, "o");
    var textoDesencriptado = textoDesencriptado.replace(/imes/img, "i");
    var textoDesencriptado = textoDesencriptado.replace(/ai/img, "a");
    var textoDesencriptado = textoDesencriptado.replace(/ufat/img, "u");

    /*document.getElementById("imgDesencriptar").style.display="none";
    document.getElementById("textoDesencriptar").style.display="none";*/
    document.getElementById("resultadoEncriptado").innerHTML = textoDesencriptado;
    document.getElementById("copiar").style.display="show";
    document.getElementById("copiar").style.display="inherit";

    document.getElementById("desencriptar").disabled = true;
    document.getElementById("limpiarTexto").disabled = false; 
    document.getElementById("textoEncriptar").focus();    

}

function copiarResultado(){

    var textoCopiar = document.querySelector("#resultadoEncriptado");
    textoCopiar.select();
    document.execCommand("copy");
    alert("Se copió el texto para desencriptar")
    document.getElementById("textoEncriptar").value="";
    document.getElementById("textoEncriptar").focus();
     

}


function limpiarTexto(){

    document.getElementById("textoEncriptar").value="";
    document.getElementById("textoEncriptar").focus();
    document.getElementById("desencriptar").disabled = false;
    document.getElementById("limpiarTexto").disabled = true; 

}