var numero1 = 0;
var numero2 = 0;
var total = 0;


var salir = "exit";

do {
    const calcular = prompt("ingrese:\n 's'  si desea SUMAR \n 'r' si desea RESTAR \n 'm' si de sea MULTIPLICAR \n 'd' si desea DIVIDIR \n 'exit' SI DESEA SALIR");

    switch (calcular.toLowerCase()) {

        case 's':
            var numero1 = parseInt(prompt("ingrese valor 1"));
            var numero2 = parseInt(prompt("ingrese valor 2"));
            var s = numero1 + numero2;
            console.log("EL Resultado es: " + s);
            alert("EL Resultado es: " + s); 
            break;
M
        case 'r':
            var numero1 = parseInt(prompt("ingrese valor 1"));
            var numero2 = parseInt(prompt("ingrese valor 2"));
            var r = numero1 - numero2;
            console.log("EL Resultado es: " + r);
            alert("EL Resultado es: " + r);
        
            break; 

        case 'm':
            var numero1 = parseInt(prompt("ingrese valor 1"));
            var numero2 = parseInt(prompt("ingrese valor 2"));
            var m = numero1 * numero2;
            console.log("EL Resultado es: " + m);
            alert("EL Resultado es: " + m);
            document.write("El resulta es:"+m);
            break;

        case 'd':
            var numero1 = parseInt(prompt("ingrese valor 1"));
            var numero2 = parseInt(prompt("ingrese valor 2"));
            var d = numero1 / numero2;
            console.log("EL Resultado es: " + d);
            alert("EL Resultado es: " + d);
            break;

        default:
            console.log("Ingrese un letra valida");
            break
    }

} while ( salir != "exit");

