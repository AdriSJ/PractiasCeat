var numDNI=prompt("Inserte sus números del DNI: ");
var letraDNI=prompt("Indique su letra del DNI");
var letra=letraDNI.toLocaleUpperCase();
if(numDNI<0||numDNI>99999999){
    alert("Ha introducido mal sus datos.")
}else{
var nif=parseInt(numDNI);
var r=nif%23;    
new Array();
var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N',
'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
var pos=letras[r];
if(letra==pos){
    alert("Su letra es correcta");
}else{
    alert("Ha introducido mal su letra.")
}
}