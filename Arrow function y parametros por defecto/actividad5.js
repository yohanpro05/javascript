// Función con parámetros por defecto
const registrarUsuario = (nombre, rol, estado = 'activo') => {
    console.log(`Usuario: ${nombre}, Rol: ${rol}, Estado: ${estado}`);
    return { nombre, rol, estado };
};

//  Casos de Prueba

// Caso 1: Solo nombre y rol
registrarUsuario("Ana", "Admin");

// Caso 2: Todos los argumentos
registrarUsuario("Juan", "Ventas", "pendiente");

// Caso 3: Nombre y estado (rol omitido)
registrarUsuario("Marcos", "Activo");