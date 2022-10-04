/*Escribir un programa que lea números enteros hasta teclear 0 (cero). Al finalizar el
programa se debe mostrar el máximo número ingresado, el mínimo, y el promedio de
todos ellos.*/
var suma = 0;
var i = 0;
let numeros = [];
var promedio = 0;
var cont = 0;

do {
  numeros.push(parseInt(prompt("Ingrese numero hasta que se le canse los dedos")));

  console.log(numeros);

} while (numeros[numeros.length - 1] != 0);

for (i = 0; i < numeros.length; i++) {
  suma = suma + numeros[i]
  cont++;
}

console.log("Es valor maximo es: " + Math.max(...numeros));
console.log("Es valor minimi es: " + Math.min(...numeros));
console.log("El promedio es: " + suma / (cont - 1));
