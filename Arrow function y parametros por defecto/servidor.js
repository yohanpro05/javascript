const CONFIG = {
    servidor: "api.sistema.com",
    puerto: 8080,
    conexionActiva: false
};

// Intento de modificación interna
CONFIG.conexionActiva = true;

// Intento de reasignación total (debe generar error)
try {
    CONFIG = {
        servidor: "api.nuevo.com",
        puerto: 3000
    };
} catch (error) {
    console.error("Error detectado:", error.message);
}
