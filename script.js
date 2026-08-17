function calcularPrecio(precioUnitario, cantidad) {
    return precioUnitario * cantidad;
}

function puedeReservar(cantidad) {
    return cantidad > 0;
}

const botonCotizacion = document.querySelector("#BotonCotizacion");
const contadorCotizacion = document.querySelector("#cotizacionDiaria");

botonCotizacion.addEventListener("click", function () {

    console.log("Me tocaron el botoncito :$");

    const cotizacionActual = Number(contadorCotizacion.textContent);

    if (puedeReservar(cotizacionActual)) {
        contadorCotizacion.textContent = cotizacionActual - 1;
    } else {
        botonCotizacion.textContent = "SinVisitas";
        botonCotizacion.disabled = true;
    }

});




//* <script src="script.js"></script>

//document.querySelector("#cotizacion-diaria")

//document.querySelector("#cotizacion-diaria").textContent

//document.querySelector("#cotizacion-diaria").textContent = "05"

//document.querySelector("#cotizacion-diaria").textContent = "Agotado"*/