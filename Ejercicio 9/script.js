
let frase = prompt("Ingrese un frase");
var sepfrase = "";

for (let i = 0; i < frase.length; i++) {
    let separa = frase.substring(i, (i + 1));
    sepfrase = sepfrase + separa + " ";
}

console.log(sepfrase);
alert(sepfrase);