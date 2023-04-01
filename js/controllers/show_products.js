import { productosServices } from "../service/product-service.js";
import { openGalery } from "../gallery-img.js";

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

const contenedor_Productos = document.querySelector("[data-product-container]");

productosServices
    .listaProducto()
        .then( (data) => {
            data.forEach( ({id, imagen, nombre, precio}) => {
                const nuevaCardProduct = crearNuevaCardProduct(id, imagen, nombre, precio);
                contenedor_Productos.appendChild(nuevaCardProduct);
            });
        }).catch((error) => alert("Ocurrió un error"));