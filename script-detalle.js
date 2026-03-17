const bebidas = [
    {
        id: 1,
        nombre: "Latte Pistache",
        descripcion: "Espresso con leche vaporizada y toque de pistache.",
        precio: 85,
        imagen: "https://images.unsplash.com/photo-1511920170033-f8396924c348"
    },
    {
        id: 2,
        nombre: "Cappuccino",
        descripcion: "Espresso con espuma cremosa.",
        precio: 70,
        imagen: "https://images.unsplash.com/photo-1509042239860-f550ce710b93"
    },
    {
        id: 3,
        nombre: "Caramel Frappuccino",
        descripcion: "Bebida fría con caramelo y crema batida.",
        precio: 95,
        imagen: "https://images.unsplash.com/photo-1498804103079-a6351b050096"
    },
    {
        id: 4,
        nombre: "Cold Brew",
        descripcion: "Café frío intenso de larga extracción.",
        precio: 80,
        imagen: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735"
    }
];

const id = localStorage.getItem("bebidaSeleccionada");

const bebida = bebidas.find(b => b.id == id);

document.getElementById("detalle").innerHTML = `
    <img src="${bebida.imagen}" width="250">
    <h3>${bebida.nombre}</h3>
    <p>${bebida.descripcion}</p>
    <p><strong>$${bebida.precio}</strong></p>
    <button onclick="irAPago()" class="btn-primary">
        Ir a pagar
    </button>
    <button onclick="buscarTienda()" class="btn-secondary">
        Buscar tienda
    </button>
`;

function irAPago() {
    window.location.href = "pago.html";
}

function buscarTienda() {
    window.open("https://www.starbucks.com.mx/store-locator", "_blank");

}
