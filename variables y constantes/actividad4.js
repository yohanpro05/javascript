let usuarioActivo = true;
let ID_UNICO = "USR101";
const nombreUsuario = "Carlos";
const rol = "Administrador";
let intentos = 0;

function IniciarSesion() {
    if (usuarioActivo) {
        const mensaje = "Bienvenido al sistema, " + nombreUsuario + ".";
        console.log(mensaje);
        const permisos = [ "Leer", "escribir", "eliminar"];
        for (let i = 0; i < permisos.length; i++) {
            console.log("Permiso concedido:", permisos[1]);
        }
    } else {
        const mensaje = "Usuario inactivo. Contacte al administrador.";
        console.log(mensaje);
    }
}


ID_UNICO = "USR102"; 
usuarioActivo = false;


IniciarSesion();


const mensaje = "Fin del proceso de autenticación.";
console.log(mensaje);
console.log("ID_actual:", ID_UNICO);
console.log("Intentos de acceso", intentos);