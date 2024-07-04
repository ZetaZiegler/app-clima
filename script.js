let urlBase = 'https://api.openweathermap.org/data/2.5/weather'
let api_key = '923104f3766160f6bd277a03e3e56129'

document.getElementById('botonBusqueda').addEventListener('click', () => {
    const ciudad = document.getElementById('ciudadEntrada').value
    if(ciudad){
        fetchDatosClima(ciudad)
    }
})

function fetchDatosClima(ciudad){
    fetch(`${urlBase}?q=${ciudad}&appid=${api_key}&units=metric&lang=es`)
    .then(data => data.json())
    .then(data => mostrarDatosClima(data))
    console.log(data)
}

function mostrarDatosClima(data){
    const divDatosClima = document.getElementById('datosClima')
    divDatosClima.innerHTML=''

    const ciudadNombre = data.name
    const temperatura = data.main.temp
    const descripcion = data.weather[0].description
    const pais = data.sys.country
    const icono = data.weather[0].icon
    const humedad = data.main.humidity
    const veloViento = data.wind.speed
    const direViento = data.wind.deg

    const ciudadTitulo = document.createElement('h2')
    ciudadTitulo.textContent = `${ciudadNombre}, ${pais}`

    const temperaturaInfo = document.createElement('p')
    temperaturaInfo.textContent= `La temperatura es: ${Math.floor(temperatura)}°C`

    const humedadInfo = document.createElement('p')
    humedadInfo.textContent = `La humedad es: ${humedad}%`

    const iconoInfo = document.createElement('img')
    iconoInfo.src= `https://openweathermap.org/img/wn/${icono}@2x.png`

    const descripcionInfo = document.createElement('p')
    descripcionInfo.textContent = `El pronóstico es ${descripcion}`

    const vientoInfo = document.createElement('p')
    vientoInfo.textContent = `La velocidad del viento es de ${Math.floor(veloViento * 3.6)} Km/h`

    divDatosClima.appendChild(ciudadTitulo)
    divDatosClima.appendChild(temperaturaInfo)
    divDatosClima.appendChild(humedadInfo)
    divDatosClima.appendChild(vientoInfo)
    divDatosClima.appendChild(iconoInfo)
    divDatosClima.appendChild(descripcionInfo)
}