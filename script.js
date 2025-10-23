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
};

function agregarAuto(id){
    if (!autos[id]) {
        return
    }
    for (let i = 0; i < autos.length; i++){
    if (id == autos[i].id) {
        let item = {
            marca: autos[i].marca, 
            modelo: autos[i].modelo,
            precio: autos[i].precio,
            color: autos[i].color,
            id:id
        }
        carrito.push(item)
    }}
    console.log(carrito)
}

