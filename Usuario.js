
const usuarioData = ["Pepe", "pp@mail.com", 42, true];

class Usuario {

    constructor(nombre, email, edad, activo){

        this.nombre = nombre;
        this.email = email;
        this.edad = edad;
        this.activo = activo;

    }


    getInfo(){        return `Nombre: ${this.nombre}, Email: ${this.email}, Edad: ${this.edad}, activo:${this.activo}`;
    }

    
}

let nombre = usuarioData[0];
let email = usuarioData[1];
let edad = usuarioData[2];
let activo = usuarioData[3];

const usuario1 = new Usuario(...usuarioData);

const usuario2 = new Usuario(nombre, email, edad, activo);

console.log(usuario1.getInfo());
console.log(usuario2.getInfo());
