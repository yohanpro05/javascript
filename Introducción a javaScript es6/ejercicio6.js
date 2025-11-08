const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,   
    output: process.stdout  
});


rl.question("¿Cuál es tu nombre? ", (nombre) => {


rl.question("¿Cuántos años tienes? ", (edad) => {
    console.log(`Hola ${nombre}, tienes ${edad} años.`);
    rl.close();
    });
});