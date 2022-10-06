/*Escribe un programa JavaScript para calcular el área y el perímetro de un objeto Círculo
con la propiedad radio. Nota: Cree dos métodos para calcular el área y el perímetro. El
radio del círculo lo proporcionará el usuario.
*/
function Circulo() {

    this.radio = parseInt(prompt("Ingrese el radio del circulo"));
    const PI = Math.PI;
    
    this.area = function (radio) {

        var aux = PI * Math.pow(this.radio, 2);
        alert("El area es: " + aux);
    }

    this.perimetro = function (radio) {

        var aux2 = 2 * PI * this.radio;
        alert("El perimetro es: " + aux2);
    }
}

var circulo = new Circulo();
circulo.area(circulo.radio);
circulo.perimetro(circulo.radio);
