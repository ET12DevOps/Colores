//definir evento 'DOMContentLoaded' con funcion declarada
// document.addEventListener('DOMContentLoaded', cargaInicial)

// function cargaInicial() {

// }

//definir evento 'DOMContentLoaded' con funcion anonima
document.addEventListener('DOMContentLoaded', () => {

    let juan = {
        nombre: 'juan',
        apellido: 'perez',
        edad: 19,
        email: 'voy@rtucasa.com'
    }

    let alumnos = []

    alumnos.push(juan)
    alumnos.push(juan)
    alumnos.push(juan)
    alumnos.push(juan)
    alumnos.push(juan)
    alumnos.push(juan)
    alumnos.push(juan)
    alumnos.push(juan)
    alumnos.push(juan)
    alumnos.push(juan)
    alumnos.push(juan)
    alumnos.push(juan)
    alumnos.push(juan)
    alumnos.push(juan)
    alumnos.push(juan)
    alumnos.push(juan)

    console.log(alumnos)

    // let alumno1 = document.getElementById('alumno1')
    // alumno1.innerHTML = alumnos[0].nombre

    // let alumno2 = document.getElementById('alumno2')
    // alumno2.innerHTML = alumnos[1].nombre
    let clase = document.getElementById('clase')
    let tarjetas = '<div class="columns">'

    for (var i = 0; i < alumnos.length; i++) {
        //crear una tarjeta para cada alumno con el nombre
        tarjetas += `
        <div class="column is-one-fifth">
            <div class="box">
                ${alumnos[i].nombre + i}
            </div>
        </div>
        `
        if ((i + 1) % 5 == 0 && i > 0) {
            tarjetas += `
            </div> 
            <div class="columns">
            `
        }
    }

    tarjetas += `</div>`

    console.log(tarjetas)
    clase.innerHTML = tarjetas
})