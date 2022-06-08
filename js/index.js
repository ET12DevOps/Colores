//variables
const variableConstante = 0.32
let variableConAlcance = 'cadena de caracteres'
var variableSinAlcance = false

//variable entera
let numero = 0
console.log(numero)
numero++
console.log(numero)

//listas
let numeros = [2, 3, 4, 5, 6, 7]
let palabras = ['dos', 'tres', 'cuatro', 'cinco']
let algo = ['dos', 3, 0.4, true]
console.log(numeros)
console.log(palabras)
console.log(algo)

//objetos
let juan = {
    nombre: 'juan',
    apellido: 'perez',
    edad: 19,
    email: 'voy@rtucasa.com'
}

//console.log(juan)

let jose = {
    nombre: 'jose',
    apellido: 'perez',
    edad: 20,
    email: 'algo@mail.com'
}
//console.log(jose)

let alumnos = []

alumnos.push(juan) //agregar un objeto al vector
alumnos.push(jose) //agregar un objeto al vector
console.log(alumnos)

//funciones
//defino la funcion
function imprimirAlumnos() {
    //cuerpo de la funcion
    for (var i = 0; i < alumnos.length; i++) {
        console.log(alumnos[i])
    }
}

//realiza el llamado a la funcion para su ejecucion
imprimirAlumnos()

//funcion anonima
// () => {
    //cuerpo de la funcion
// }