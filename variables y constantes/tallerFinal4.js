// 4. Control de Intentos de Inicio de Sesión
let intentos = 0; // Se declara con let por su alcance de bloque

function iniciarSesion() {
    try {
    intentos++; // Cada intento aumenta en uno
    console.log("Intentos de inicio de sesión:", intentos);
    // Simulamos un posible error al superar 3 intentos
    if (intentos > 3) throw "Demasiados intentos fallidos";
    } catch (error) {
    console.log("Error:", error);
    }
}


iniciarSesion();
iniciarSesion();
iniciarSesion();
iniciarSesion(); // Este generará el error del try/catch