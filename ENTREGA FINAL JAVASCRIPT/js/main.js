const productos = [
    //buzos
    {
        id: "abrigo-01",
        titulo: "Nike Therma-FIT",
        imagen: "./assets/Buzo01.png",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: "$41000"
    },
    {
        id: "abrigo-02",
        titulo: "Nike Sportswear",
        imagen: "./assets/Buzo02.png",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: "$39500"
    },
    {
        id: "abrigo-03",
        titulo: "Jordan Brooklyn",
        imagen: "./assets/Buzo03.png",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: "$51200"
    },
    {
        id: "abrigo-04",
        titulo: "Nike Air",
        imagen: "./assets/Buzo04.png",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: "$44500"
    },
    //remeras
    {
        id: "remera-01",
        titulo: "Nike Sportswear",
        imagen: "./assets/Remera01.png",
        categoria: {
            nombre: "Remeras",
            id: "remeras"
        },
        precio: "$18000"
    },
    {
        id: "remera-02",
        titulo: "Nike ACG",
        imagen: "./assets/Remera02.png",
        categoria: {
            nombre: "Remeras",
            id: "remeras"
        },
        precio: "$21600"
    },
    {
        id: "remera-03",
        titulo: "Nike ACG",
        imagen: "./assets/Remera03.png",
        categoria: {
            nombre: "Remeras",
            id: "remeras"
        },
        precio: "$36000"
    },
    {
        id: "remera-04",
        titulo: "Nike Sportswear",
        imagen: "./assets/Remera04.png",
        categoria: {
            nombre: "Remeras",
            id: "remeras"
        },
        precio: "$14000"
    },
    //pantalones
    {
        id: "pantalon-01",
        titulo: "Jordan Brooklyn",
        imagen: "./assets/Pantalon01.png",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: "$52000"
    },
    {
        id: "pantalon-02",
        titulo: "Jordan Dri-FIT Sport",
        imagen: "./assets/Pantalon02.png",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: "$50000"
    },
    {
        id: "pantalon-03",
        titulo: "Nike Solo Swoosh",
        imagen: "./assets/Pantalon03.png",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: "$57600"
    },
    {
        id: "pantalon-04",
        titulo: "Jordan 23 Engineered",
        imagen: "./assets/Pantalon04.png",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: "$45600"
    },
]

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");

function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {
        
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
        <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
        <div class="producto-detalles">
            <h3 class="producto-titulo">${producto.titulo}</h3>
            <p class="producto-precio">${producto.precio}</p>
            <button class="producto-agregar" id="${producto.id}">Agregar</button>
        </div>
        `;

        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
}


botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if(e.currentTarget.id != "todos") {
            const ProductoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = ProductoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
        cargarProductos(productosBoton);
        }else{
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }


    })
})

cargarProductos(productos);

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito)
    });
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}

const productosEnCarritoLS = JSON.parse(localStorage.getItem("productos-en-carrito"));
if (productosEnCarritoLS) {
    productosEnCarrito = productosEnCarritoLS;
    actualizarNumerito()
} else{
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {

    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id ===idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

