class Configuracion {
constructor(tema, idioma) {
    this.tema = tema;
    this.idioma = idioma;
}

aplicarCambios() {
    console.log(`Se ha cambiado el tema a ${this.tema} y el idioma a ${this.idioma}.`);
    }
}

const config1 = new Configuracion("oscuro", "español");

config1.aplicarCambios(); 