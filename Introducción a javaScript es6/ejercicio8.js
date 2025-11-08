class Producto {
    constructor(nombre, precio, categoria) {
    this.nombre = nombre;
    this.precio = precio;
    this.categoria = categoria;
    }

    mostrarInfo() {
    console.log(`El producto ${this.nombre} tiene un precio de $${this.precio} y es de la categoría ${this.categoria}.`);
    }
}

new Producto("Tablet", 2500000, "electrónica").mostrarInfo();
