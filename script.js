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


function agregarAuto(idInput){


    if (!autos[idInput]) {
        return
    }


    const auto = autos[idInput]
   
    let item = {
        marca: auto.marca,
        modelo: auto.modelo,
        precio: auto.precio,
        color: auto.color,
        id: idInput
    }


    carrito.push(item)
    console.log(carrito)
}


function eliminarAuto(idInput){
    for (let i = 0; i < carrito.length; i++) {
        if (idInput == carrito[i].id) {
            carrito.splice(i,1)
            break
        }
    }
    console.log(carrito)
}


document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll(".botonAgregar").forEach(boton => {
        boton.addEventListener("click", () => {
            agregarAuto(boton.id)
        })
    })
})



