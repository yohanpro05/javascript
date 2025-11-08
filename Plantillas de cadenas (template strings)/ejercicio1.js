const nombre = "Mariana";
const edad = 26;
const ciudad = "Bogota";
const carrera = "Diseno Grafico";

let estadoEdad;
if (edad >= 18) {
    estadoEdad = "Eres mayor de edad.";
} else {
    estadoEdad = "Eres menor de edad.";
}

const mensaje = `Hola ${nombre}, tienes ${edad} años y vives en ${ciudad}.
                Estás inscrita en la carrera de ${carrera}.
                ${edad >= 18 ? "Eres mayor de edad." : "Eres menor de edad."}
                Bienvenida a la plataforma.`;
console.log(mensaje);