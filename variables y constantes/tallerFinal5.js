// 5. Configuración del Sistema
// El objeto no debe ser reemplazado, pero sus propiedades pueden cambiar
const CONFIG = {
    servidor: "localhost",
    puerto: 8080,
    seguro: false
};

// Se puede modificar una propiedad
CONFIG.seguro = true;
console.log("Configuración del sistema:", CONFIG);
