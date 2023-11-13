const botonColorMode = document.querySelector("#color-mode");
const body = document.body;

let darkMode = localStorage.getItem("dark-mode");

function activarDarkMode() {
    body.classList.add("dark-mode");
    localStorage.setItem("dark-mode", "activado");
}

function desactivarDarkMode() {
    body.classList.remove("dark-mode");
    localStorage.setItem("dark-mode", "desactivado");
}

if (darkMode === "activado"){
    activarDarkMode();
} else{
    desactivarDarkMode();
}

botonColorMode.addEventListener("click", () => {
    darkMode = localStorage.getItem("dark-mode");

    if (darkMode === "activado") {
        desactivarDarkMode();
    } else {
        activarDarkMode();
    }
})

const productos = [
    {
        id: "teclado-01",
        titulo: "Kumara k552",
        imagen: "./assets/img/kumara.png",
        precio: "$54900"
    },
    {
        id: "teclado-02",
        titulo: "Kumara k552 blanco",
        imagen: "./assets/img/kumara blanco.png",
        precio: "$54900"
    },
    {
        id: "teclado-03",
        titulo: "Draconic",
        imagen: "./assets/img/draconic negro.jpg",
        precio: "$70300"
    },
    {
        id: "teclado-04",
        titulo: "Draconic blanco",
        imagen: "./assets/img/draconic blanco.jpg",
        precio: "$70300"
    },
    {
        id: "teclado-05",
        titulo: "Horus k622",
        imagen: "./assets/img/horus k622.png",
        precio: "$61500"
    },
    {
        id: "teclado-06",
        titulo: "K599 deimos",
        imagen: "./assets/img/k599 deimos.png",
        precio: "$61500"
    },
];

const contenedorProductos = document.querySelector("#contenedor-productos");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

function cargarProductos() {
    productos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="">
            <div class="producto-detalle">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">agregar</button>
            </div>
        `;

        contenedorProductos.append(div);
    });

    actualizarBotonesAgregar();
}

cargarProductos();

const productosEnCarrito = [];

function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if (productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito))
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}