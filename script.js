// Arrays y diccionarios

let carrito = []

const autos = {
  "audi-a7": {
    id: "audi-a7",
    
    marca: "Audi",
    modelo: "A7",
    anio: "2020",
    KMs: "65000Kms",
    Transmisión: "AT",
    Combustible: "Nafta",
    precio: "98000000",
    color: "Negro"
  },
  "bmw-335i": {
    id: "bmw-335i",
    
    marca: "BMW",
    modelo: "335i Coupe Sportive",
    anio: "2013",
    KMs: "11600",
    Transmisión: "AT",
    Combustible: "Nafta",
    precio: "41000000",
    color: "Blanco"
  },
  "ds-7-crossback": {
    id: "ds-7-crossback",
    
    marca: "DS",
    modelo: "7 crossback",
    anio: "2020",
    KMs: "30000",
    Transmisión: "AT",
    Combustible: "Diesel",
    precio: "98000000",
    color: "Blanco"
  },
  "jaguar-f-type-r": {
    id: "jaguar-f-type-r",
    
    marca: "Jaguar",
    modelo: "F-Type R",
    anio: "2019",
    KMs: "25000",
    Transmisión: "AT",
    Combustible: "Nafta",
    precio: "102000000",
    color: "Negro"
  },
  "lexus-ls-500": {
    id: "lexus-ls-500",
    
    marca: "Lexus",
    modelo: "LS 500",
    anio: "2022",
    KMs: "12000",
    Transmisión: "AT",
    Combustible: "Nafta",
    precio: "109000000",
    color: "Plata"
  },
  "maserati-levante-gransport": {
    id: "maserati-levante-gransport",
    
    marca: "Maserati",
    modelo: "Levante GranSport",
    anio: "2020",
    KMs: "28000",
    Transmisión: "Manual",
    Combustible: "Nafta",
    precio: "99000000",
    color: "Blanco"
  },
  "porsche-911": {
    id: "porsche-911",
    
    marca: "Porsche",
    modelo: "911",
    anio: "1987",
    KMs: "22000",
    Transmisión: "Manual",
    Combustible: "Nafta",
    precio: "145000000",
    color: "Naranja"
  },
  "land-rover-range-rover-vogue": {
    id: "land-rover-range-rover-vogue",
    
    marca: "Land Rover",
    modelo: "Range Rover Vogue",
    anio: "2010",
    KMs: "5560",
    Transmisión: "Manual",
    Combustible: "Nafta",
    precio: "102000000",
    color: "Negro"
  }
}

// Funciones

function agregarAuto(idInput){

    if (!autos[idInput]) {
        return
    }

    let auto = autos[idInput]
    
    let item = {
        marca: auto.marca,
        modelo: auto.modelo,
        precio: auto.precio,
        color: auto.color,
        id: idInput
    }

    carrito.push(item)
    obtenerAutos()
}

function obtenerAutos() {
    let lista = document.getElementById('items-carrito')
    let totalSpan = document.getElementById('total-carrito')
    if (!lista || !totalSpan) return // dudas

    lista.innerHTML = ''
    let total = 0

    carrito.forEach(item => { // Mmas facil el forEach
        let li = document.createElement('li')
        li.textContent = item.marca + ' ' + item.modelo + ' - Color: ' + item.color + ' - $' + item.precio

        let btnEliminar = document.createElement('button')
        btnEliminar.textContent = 'X'
        btnEliminar.addEventListener('click', () => eliminarAuto(item.id))

        // Los que antes estaban en el html los paso para aca
        let btnOriginal = document.createElement('button') // creo que el problema del button era con codepen
        btnOriginal.textContent = 'Original' // si tengo tiempo voy a cambiar para que los que el original sea uno de los dos colores, no tenga 3 botones
        btnOriginal.id = item.id + '-original'
        btnOriginal.addEventListener('click', () => cambiarColor(btnOriginal.id))

        let btnBlanco = document.createElement('button')
        btnBlanco.textContent = 'Blanco'
        btnBlanco.id = item.id + '-blanco'
        btnBlanco.addEventListener('click', () => cambiarColor(btnBlanco.id))

        let btnNegro = document.createElement('button')
        btnNegro.textContent = 'Negro'
        btnNegro.id = item.id + '-negro'
        btnNegro.addEventListener('click', () => cambiarColor(btnNegro.id))

        li.appendChild(btnEliminar)
        li.appendChild(btnOriginal)
        li.appendChild(btnBlanco)
        li.appendChild(btnNegro)
        lista.appendChild(li)

        total += Number(item.precio)
    })
    totalSpan.textContent = total
}

function eliminarAuto(idInput){
    for (let i = 0; i < carrito.length; i++) {
        if (idInput == carrito[i].id) {
            carrito.splice(i,1)
            break
        }
    }
    obtenerAutos()
}

function cambiarColor(idBoton) {

    let partes = idBoton.split('-')
    let accion = partes.pop() 
    let idAuto = partes.join('-') // el resto es el id completo del auto

    let nuevoColor = null // 
    if (accion === 'original') {
        if (autos[idAuto] && autos[idAuto].color) {
            nuevoColor = autos[idAuto].color
        }
    } else if (accion == 'blanco') {
        nuevoColor = 'Blanco'
    } else if (accion == 'negro') {
        nuevoColor = 'Negro'
    }

    if (nuevoColor === null) return 

    let autoEnCarrito = carrito.find(auto => auto.id === idAuto)
    if (autoEnCarrito) {
        autoEnCarrito.color = nuevoColor
    }

    obtenerAutos()
}

function vaciarCarrito() {
    carrito = []
    obtenerAutos()
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll(".botonAgregar").forEach(boton => {
        boton.addEventListener("click", () => {
            agregarAuto(boton.id)
        })
    })

    document.querySelectorAll(".botonColor").forEach(boton => {
        boton.addEventListener("click", () => {
            cambiarColor(boton.id)
        })
    })

    let vaciarBtn = document.getElementById('vaciar-carrito')
    if (vaciarBtn) {
        vaciarBtn.addEventListener('click', vaciarCarrito)
    }
})