// function alerta(){      //declaro la función
//     var mensaje="Hola mundo";   
//     var mensaje2="Soy el \"primer script\". " ;          
//         alert(mensaje);         //se ejecuta la alerta
//         alert(mensaje2);       
// }               
// alerta();                   //llamo a la función

function enviarMensaje(){
    var mensaje="Hola mundo, que fácil es escribir 'comillas simples' y \"comillas dobles\"."
    alert(mensaje);
}

window.onload=function(){
    boton.addEventListener("click",enviarMensaje);
}