//Escribir una función que reciba un String y devuelva la palabra más larga.

function largo(palabra){
    palabra = palabra.split(" ")
    return palabra.sort((a, b) => b.length - a.length)[0]
  }
       
  alert(largo(prompt("Ingrese la frase")));
