document.addEventListener('DOMContentLoaded', () => {

    const url = 'http://localhost:3000/colors'

    axios.get(url)
        .then(response => {

            //console.log(response)
            colores = response.data
            let divColores = document.getElementById('colores')
            let tarjetasColores = '<div class="columns">'

            for (let i = 0; i < colores.length; i++) {
                tarjetasColores += `
                    <div class="column is-one-fifth">
                        <div class="card">
                            <header class="card-header">
                                <p class="card-header-title">
                                    ${i + 1}. ${colores[i].name}
                                </p>
                            </header>
                            <div class="card-content">
                                <div class="box" style="background-color:${colores[i].hex}">
                                </div>
                            </div>
                        </div>
                    </div>
                `
                if ((i + 1) % 5 == 0 && i > 0) {
                    tarjetasColores += `
                    </div> 
                    <div class="columns">
                    `
                }
            }
            tarjetasColores += '</div>'
            console.log(tarjetasColores)

            divColores.innerHTML = tarjetasColores

        })
})