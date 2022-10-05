/*
var elementos = ["Papa", "Camote", "Lechuga", "Tomate", "Acelga"];


console.log("Son: " + elementos.length + " elementos");
console.log(`Verduras: " ${[elementos]}`);
alert("Verduras: "+[elementos]);
var si= "";

prompt("Se van eliminar dos elementos. Desea continuar? Enter")
elementos.splice(3, 2);
console.log(elementos);
alert("Se eliminaron los ultimos 2 elementos")
alert(elementos);
alert("FURTAS RESTANTES")
alert("FRUTAS:"+elementos);
*/

var array = [10]

for (let i = 0; i < 10; i++) {
    array[i] = [Math.random(10)]
}

console.log(array)

array.pop()


console.log(array)
