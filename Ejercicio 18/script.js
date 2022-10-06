var valores = [true, 5, false, "hola", "adios", 2];
console.log("Cantidad de elementoa del array: " + valores.length); // cantidad de elementos dentro del ARRAY

console.log("Elemento en su posicion 3: " + valores[3]);
console.log("Elemento en su posicion 4: " + valores[4]);

a = [3];
b = [4];
c = true;
d = false;

function comparar(a, b) {

    if (a < b) {
        console.log(a + ">> ES MAYOR QUE" + b);
    } else {
        console.log(b + ">> ES MAYOR QUE " + a);
    }
}

function operabolean(c, d) {
    var result1 = prompt("Ingrese un numeros y asombrese del resultado")
    var result2 = prompt("Ingrese otro numeros y asombrese del resultado")
    if (result1 == result2) {

        console.log("C es: " + c)

    } else if (result1 != result2) {

        console.log("D es " + d);
    }
}

function matematica(a, b) {

    console.log(`La suma es: '${a + b}}`);
    console.log(`La resta es: '${a - b}}`);
    console.log(`La multiplicacion es: '${a * b}}`);
    console.log(`La division es: '${a / b}}`);
}

console.log("METODO COMPARAR ELEMENTOS DENTRO DE ARRAY DISTINTOS");
comparar(valores[a], valores[b]);
console.log("METODO OPERACIONES MATEMATICAS DENTRO DE UN ARRAY DISTINTOS");
matematica(valores[1], valores[5]);
console.log("METODO COMPARAR ELEMENTOS Y DEVOLVER UN BOOLEANO DENTRO DE UN ARRAY");
operabolean(valores[0], valores[2]);