let dato1;
dato1 = new Array(5);
let dato2
dato2 = new Array(5);

function cargar(dato1) {
    for (let i = 0; i < dato1.length; i++) {
        dato1[i] = (Math.random() * 10).toFixed(2);
        console.log(dato1[i]);
    }
}
    function cargar(dato2) {
        for (let i = 0; i < dato2.length; i++) {
            dato2[i] = Math.random() *10;
            console.log(Math.floor(dato2[i]));
        }
    }
    
console.log("Vector 1: ");
cargar(dato1);
console.log("Vector 2: ");
cargar(dato2);