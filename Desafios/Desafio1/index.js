class Usuario {
    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
      }

    mostrarNombre (nombre, apellido){
        console.log(`Nombre: ${this.nombre} 
                Apellidos: ${this.apellido}`)
    }

    agregarmascota(){
        let nuevaMascota = prompt("Ingrese Nueva Mascota")
        mascotas.push(nuevaMascota)
        console.log(usuario1.mascotas)
    }

    agregarlibro(){
        let nuevoLibro = prompt("Ingrese Nombre del Libro")
        let nuevoAutor = prompt("Ingrese Nombre del autor")
        
        const libronuevo = {
            nombre : nuevoLibro,
            autor : nuevoAutor,
        }     
        libros.push(libronuevo)
        console.log(usuario1.libros)
    }

    contarMascotas(){
        console.log(`Cantidad de mascotas: ${mascotas.length}`)
    }
 
}

let nombre = "Nicolas"
let apellido = "Medina Pozzi"
let libros = [{nombre: 'El señor de las moscas',autor: 'William Golding'},
              {nombre: 'Fundacion', autor: 'Isaac Asimov'}]
let mascotas = ['perro', 'gato']

const usuario1 = new Usuario(nombre, apellido, libros, mascotas)

usuario1.mostrarNombre()
usuario1.agregarmascota()
usuario1.agregarlibro()
usuario1.contarMascotas()

