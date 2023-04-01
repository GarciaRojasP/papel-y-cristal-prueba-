import { productosServices } from "../service/product-service.js";
import { openGalery } from "../gallery-img.js";
import { categoriaServices } from "../service/categoria-services.js";

const crearNuevaCardCategoria = (categoria) =>{

    const div = document.createElement("div");
    div.classList.add("categoria");
    
    const contenido = ` 

        <div class="ctn_title">
            <h2 class="titulo__principal">${categoria}</h2>
            <h3 class="link-categorias"> <a class="link-categorias" href="categoria.html?categoria=${categoria}">Ver más</a></h3>
        </div>
        <div class="Productos__container" data-product-${categoria}>       
        </div>
    `
    div.innerHTML = contenido;
    return div;
}

const contenedorPrincipal = document.querySelector("[data-ctn]");


categoriaServices.listaCategoria()
    .then((data) => {
        data.forEach( ({categoria}) => {
            const nuevaCardCategoria = crearNuevaCardCategoria(categoria);
            contenedorPrincipal.appendChild(nuevaCardCategoria);
        })
    }).catch((error) => alert("Ocurrió un error"));




const crearNuevaCardProduct = (id, imagen, nombre, precio) =>{

    const div = document.createElement("div");
    div.classList.add("producto");
    
    const contenido = ` 
        <div class="producto-ctn_img">
            <img src="${imagen}" alt="${nombre}" class="producto__img">
        </div>

        <div class="producto_contenido">
            <h3 class="producto__titulo">${nombre}</h3>
            <p class="producto__precio">${precio}</p>

            <div class="producto-ctn__botones">

                <a href="descripcion_producto.html?id=${id}" class="boton btn_informarcion">
                    <i class="fa-solid fa-plus"></i>Informacion
                </a>

                <button class="boton btn_agregar">
                    <i class="fa-solid fa-cart-shopping"></i>Agregar
                </button>
            </div>

        </div>
    `
    div.innerHTML = contenido;

    const imgs = document.querySelectorAll(".Productos__container .producto__img");
    imgs.forEach((img) => {
        img.addEventListener("click", (evento) => {
            openGalery(evento.target);
        });
    })

    return div;
}

productosServices
    .listaProducto()
        .then( (data) => {
            const contenedor_animal = document.querySelector("[data-product-animal]");
            const contenedor_pokemon = document.querySelector("[data-product-pokémon]");
            const contenedor_flor = document.querySelector("[data-product-flor]");

            const categoriaProductoPokemon = data.filter(data => data.categoria === "Pokémon").slice(0,5);
            const categoriaProductoAnimal= data.filter(data => data.categoria === "Animal").slice(0,5);
            const categoriaProductoFlor = data.filter(data => data.categoria === "Flor").slice(0,5);

            categoriaProductoPokemon.forEach(({id, imagen, nombre, precio}) => {
                const nuevaCardProduct = crearNuevaCardProduct(id, imagen, nombre, precio);
                contenedor_pokemon.appendChild(nuevaCardProduct);
            })

            categoriaProductoAnimal.forEach(({id, imagen, nombre, precio}) => {
                const nuevaCardProduct = crearNuevaCardProduct(id, imagen, nombre, precio);
                contenedor_animal.appendChild(nuevaCardProduct);
            })

            categoriaProductoFlor.forEach(({id, imagen, nombre, precio}) => {
                const nuevaCardProduct = crearNuevaCardProduct(id, imagen, nombre, precio);
                contenedor_flor.appendChild(nuevaCardProduct);
            })
})