let A;
A = new Array(50);
let B
B = new Array(20);

function cargar(A) {
    for (let i = 0; i < A.length; i++) {
        A[i] = (Math.random() * 50).toFixed(1);
        console.log(A[i]);
    }
}

function ordenarycopiar(A) {
    A.sort();
    console.log(A);
    B = A.slice(1, 20);
}

function rellenar(B) {

    for (let i = 10; i < 20; i++) {
        if (i < 10) {
            B[i] = A1[i];

        } else {
            B[i] = 0.5;
            console.log(B[i]);
        }
    }
}
console.log("Arreglo 1: ");
console.log("Arreglo aleatorio de 50 numeros")
cargar(A);
console.log("Arreglo ordenado de 50 numeros y copiamos los primero 10")
ordenarycopiar(A);
console.log("rellenamos el Array B con los 10 elemento copiamos y los 10 restantes con el valor 0,5");
rellenar(B);
console.log("\n <<<<<<<<<<<<<<MOSTRAMOS AMBOS ARREGLOS, EL ORDEANDO Y EL COMBINADO>>>>>>>>>>>>>>>")
console.log("ARREGLO A");
console.log(A);
console.log("ARREGLO B");
console.log(B);