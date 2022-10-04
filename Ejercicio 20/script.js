//Realizar un programa que obtenga la siguiente matriz [[3], [6], [9], [12], [15]] y devuelve y
//muestre el siguiente array [6, 9, 12, 15, 18].

let matriz =[[3], [6], [9], [12], [15]];

console.log(matriz);

let arrayNuevo = matriz.flat([1]);
    // retorna elementos para el nuevo array
    delete arrayNuevo[0];
    console.log(arrayNuevo);
