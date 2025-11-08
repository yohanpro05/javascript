class Animal {
    constructor (especie, sonido) {
        this.especie = especie;
        this.sonido = sonido;
    }
    hacerSonido() {
        console.log(`El ${this.especie} hace ${this.sonido}!`);
    }
}
const perro = new Animal("perro", "Guau");

perro.hacerSonido();