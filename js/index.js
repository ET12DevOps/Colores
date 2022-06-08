//definir evento con funcion declarada
// document.addEventListener('DOMContentLoaded', cargaInicial)

// function cargaInicial() {

// }

//definir evento con funcion anonima
document.addEventListener('DOMContentLoaded', () => {

    let juan = {
        nombre: 'juan',
        apellido: 'perez',
        edad: 19,
        email: 'voy@rtucasa.com'
    }

    let jose = {
        nombre: 'jose',
        apellido: 'perez',
        edad: 20,
        email: 'algo@mail.com'
    }

    let alumnos = []

    alumnos.push(juan)
    alumnos.push(jose)

    console.log(alumnos)
})