var p1 = new Persona('Leonardo', 35, 'M');
function Persona(Nombre, Edad, Sexo) {
    this.Nombre = Nombre;
    this.Edad = Edad;
    this.Sexo = Sexo;
     
}

console.log(p1);
document.write("Nombre: "+p1.Nombre + ", Edad:"+p1.Edad + ", Sexo: "+p1.Sexo);
alert(`El nombre de la persona es: ${p1.Nombre} y su edad es ${p1.Edad}, 
de sexo ${p1.Sexo}`);


