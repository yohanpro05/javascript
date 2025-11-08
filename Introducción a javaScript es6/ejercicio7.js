class Persona {
    constructor(nombre, profesion) {
    this.nombre = nombre;
    this.profesion = profesion;
}

presentar() {
    console.log(`Hola, soy ${this.nombre} y soy ${this.profesion}.`);
    }
}


new Persona("Yohan", "Productor musical").presentar();
