function comprobarCorreo(correo){
    var posArroba,posPunto;
    posArroba=correo.indexOf("@");
        if(posArroba==-1){
            return false;
        }
   posPunto=correo.lastIndexOf(".");
        if(posPunto==-1||posPunto<posArroba){
            return false
        }
        return true;
    }
function comprobarFormulario(){
    var edad,correo;
    texto=document.getElementById("correo").value;
    edad=document.getElementById("edad").value;
    if(isNaN(edad)){
        alert("La edad tiene que ser un nº");
        return false;
    }else if(edad>65||edad<18){
        alert("Edad fuera de los límites");
        return false;
    }
    if(comprobarCorreo(texto)==false){
        alert("Correo incorrecto.");
        return false;
    }
    return true
}