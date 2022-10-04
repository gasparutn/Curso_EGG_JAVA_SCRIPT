function Libro() {

    this.cargarLibro = function () {
        this.isbn = prompt("Por favor, ingrese el isbn del libro");
        this.titulo = prompt("Ingrese el titulo del libro");
        this.autor = prompt("Ingrese el autor del libro");
        this.paginas = prompt("Ingrese la cantidad de paginas del libro");
    }

    this.mostrarLibro = function () {
        alert(`El libro ${this.titulo} fue escrito por ${this.autor}. Tiene ${this.paginas} paginas y su isbn es ${this.isbn}.`);
    }
}

let libro = new Libro();
libro.cargarLibro();
libro.mostrarLibro();
