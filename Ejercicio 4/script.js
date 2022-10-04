var salir;
do {
    var letra = prompt("Escriba S o N para validar, otra para SALIR");
    if (letra == "s") {
        alert("correcto");
    } else if (letra == "n") {
        alert("incorrecto");
    }
        

    
} while (letra == "s" || letra == "n" || letra=="" || letra != "salir");

