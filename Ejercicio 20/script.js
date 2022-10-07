//Realizar un programa que obtenga la siguiente matriz [[3], [6], [9], [12], [15]] y devuelve y
//muestre el siguiente array [6, 9, 12, 15, 18].

let matriz = [[3], [6], [9], [12], [15]];

console.log(matriz);

let arrayNuevo = matriz.flat([1]);
// retorna elementos para el nuevo array
let arr=[5];
for (let i = 0; i < arrayNuevo.length; i++) {
    arr[i]= arrayNuevo[i]+3;
    
}

console.log(arr);
