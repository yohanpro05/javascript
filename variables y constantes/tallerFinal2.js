// identificador inmutable del usuario
//Declaramos con const porque este valor no debe cambiar nunca
const Id_usuario = "USR-001";
console.log(Id_usuario);

//intento de identificacion(esto genera error)
try {
    Id_usuario = "USR-002"
} catch (error) {
    console.error ("Error: No se puede modificar un identificador inmutable.");
}