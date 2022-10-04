
var valor1 = prompt("ingrese el valor del radio")
const PI = 3.141592653589793;


let area = (PI * Math.pow(valor1, 2));
let perimetro = (2 * PI * valor1);

// TEMPLATE STRING
var mensaje = `El area es: ${area}
El perimetro es: ${perimetro}`;

alert(mensaje);
console.log(" El area es: " + area, "\n Perimetro es: " + perimetro);

document.write("El area es: "+area, " y su perimetro es: "+perimetro);






