function encriptar(){


    var texto = document.getElementById("textoEncriptar").value.toLowerCase();
   	var chars={
        
		"á":"a", "é":"e", "í":"i", "ó":"o", "ú":"u",
		"à":"a", "è":"e", "ì":"i", "ò":"o", "ù":"u",
		"Á":"A", "É":"E", "Í":"I", "Ó":"O", "Ú":"U",
		"À":"A", "È":"E", "Ì":"I", "Ò":"O", "Ù":"U"}

	var expr=/[áàéèíìóòúùñ]/ig;

    var resultado=texto.replace(expr,function(e){return chars[e]});

    document.getElementById("textoEncriptar").value = resultado;

      
    var encriptarTexto = document.getElementById("textoEncriptar").value;
    var textEncriptado = encriptarTexto.replace(/e/img, "enter");
    var textEncriptado = textEncriptado.replace(/o/img, "ober");
    var textEncriptado = textEncriptado.replace(/i/img, "imes");
    var textEncriptado = textEncriptado.replace(/a/img, "ai");
    var textEncriptado = textEncriptado.replace(/u/img, "ufat");

   /* document.getElementById("imgDesencriptar").style.display="none";
    document.getElementById("textoDesencriptar").style.display="none";*/
    document.getElementById("resultadoEncriptado").value = textEncriptado;
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
    document.getElementById("resultadoEncriptado").value = textoDesencriptado;
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
    document.getElementById("resultadoEncriptado").value=""; 
    document.getElementById("desencriptar").disabled = false;
    document.getElementById("limpiarTexto").disabled = true; 

}