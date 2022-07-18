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
    var telefono,correo,r;
    texto=document.getElementById("correo").value;
    telefono=document.getElementById("telefono").value;
    if(comprobarCorreo(texto)==false){
        alert("Correo electrónico incorrecto.");
        return false;
    }
    r=telefono.length;
    if (isNaN(telefono) || r!=9){
        alert("Tú nº de telefono solo puede contener digitos de 0-9");
        return false;
    }
    return true;
}