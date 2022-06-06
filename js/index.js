document.addEventListener('DOMContentLoaded', cargaInicial)

function cargaInicial() {
    let colores = [] //lista de objetos con los colores

    //creo objeto color rojo
    let rojo = {
        name: 'red',
        hex: '#ff0000'
    }

    //creo objeto color azul
    let azul = {
        name: 'blue',
        hex: '#0000ff'
    }

    //creo objeto color verde
    let verde = {
        name: 'green',
        hex: '#00ff00'
    }

    //agrego los objetos color a la lista de colores
    colores.push(rojo)
    colores.push(verde)
    colores.push(azul)

    let divColores = document.getElementById('colores')
    let tarjetasColores = ''

    for (let i = 0; i < colores.length; i++) {
        tarjetasColores += `<p>${colores[i].name}</p>`
    }

    console.log(tarjetasColores)

    divColores.innerHTML = tarjetasColores
}
