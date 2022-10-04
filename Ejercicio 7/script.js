var numero;
var i=0;
var valor =parseInt(prompt("Ingrese un valor positivo"));
do {
numero=parseInt(prompt("Ingrese un numero cualquiera"));
i+= numero;
}while (valor >=i);
alert("Valor limite superado");