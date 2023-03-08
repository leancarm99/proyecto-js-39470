let respuestaPrecio = ""
let continuar = true
const mensajeInicial = "Ingrese la letra del producto a consultar: \n \n" +
    "a) Jamón Cocido Tapalque \n" +
    "b) Jamón Natural Bocatti \n" +
    "c) Jamón Crudo Artesano \n" +
    "d) Bondiola Cagnoli \n" +
    "e) Lomito Horneado Cagnoli \n" +
    "f) Panceta Ahumada Tapalque \n" +
    "g) Panceta Salada Tapalque \n" +
    "h) Mortadela Calchaqui \n"
function precios() {
    let seleccion = prompt(mensajeInicial).toLowerCase().trim()
    if (seleccion !== "a" && seleccion !== "b" && seleccion !== "c" && seleccion !== "d" && seleccion !== "e" && seleccion !== "f" && seleccion !== "g" && seleccion !== "h") {
        alert("Codigo erroneo, por favor ingrese un codigo valido")
        return
    } else {
        switch (seleccion) {
            case "a":
                respuestaPrecio = "El Jamón Cocido Tapalque cuesta $200"
                break
            case "b":
                respuestaPrecio = "El Jamón Natural Bocatti cuesta $300"
                break
            case "c":
                respuestaPrecio = "El Jamón Crudo Artesano cuesta $100"
                break
            case "d":
                respuestaPrecio = "La Bondiola Cagnoli $200"
                break
            case "e":
                respuestaPrecio = "El Lomito Horneado Cagnoli cuesta $500"
                break
            case "f":
                respuestaPrecio = "La Panceta Ahumada Tapalque cuesta $700"
                break
            case "g":
                respuestaPrecio = "La Panceta Salada Tapalque cuesta $250"
                break
            case "h":
                respuestaPrecio = "La Mortadela Calchaqui cuesta $120"
                break
            default:
                console.error("Fatal error!")
        }
        alert(respuestaPrecio)
    }

    const respuesta = confirm("Queres conocer otro precio?")
    while (respuesta) {
        precios()
    }
}