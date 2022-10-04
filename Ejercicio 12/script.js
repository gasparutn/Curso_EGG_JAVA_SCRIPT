//let double = => parseInt(console.log("El tipo de dato es: "+typeof dato));
               // METODO 1
/*
let saludar = () => console.log("El tipo de dato es: " + typeof 'saludar');
saludar();
*/

// METODO 2
/*
var dato = parseInt(prompt("ingrese dato"));
dato = () => console.log("El tipo dato es: " + typeof dato);
dato();

//METODO 3
*/
let numero = "5";
let palabra = 5;
let boolean = true;
let tipodato = (variable) => typeof variable;
alert(tipodato(numero));
alert(tipodato(palabra));
alert(tipodato(boolean));