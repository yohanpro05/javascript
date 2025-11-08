class Libro {
constructor(titulo, autor, paginas) {
    this.titulo = titulo;
    this.autor = autor;
    this.paginas = paginas;
}

mostrarResumen() {
    console.log(`El libro '${this.titulo}' fue escrito por ${this.autor} y tiene ${this.paginas} páginas.`);
    }
}

const libro1 = new Libro("Cien Años de Soledad", "Gabriel García Márquez", 496);

libro1.mostrarResumen();