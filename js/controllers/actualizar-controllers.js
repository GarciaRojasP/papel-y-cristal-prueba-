import { productosServices } from "../service/product-service.js";

const obtenerInformacion = () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    if(id===null){
        window.location.href = "error.html";
    }

    const imagen = document.querySelector("[data-imagen]");
    const nombre = document.querySelector("[data-nombreproducto]");
    const categoria = document.querySelector("[data-categoria]");
    const precio = document.querySelector("[data-precio]");
    const forma = document.querySelector("[data-forma]");
    const tipo = document.querySelector("[data-tipo]");
    const luz = document.querySelector("[data-luz]");
    const materiales = document.querySelector("[data-materiales]");

        productosServices.detalleProducto(id).then(producto => {
            imagen.value = producto.imagen;
            nombre.value = producto.nombre;
            categoria.value = producto.categoria;
            precio.value = producto.precio;
            forma.value = producto.forma;
            tipo.value = producto.tipo;
            luz.value = producto.luz;
            materiales.value = producto.materiales;
            
        }
        );

}

obtenerInformacion();

/* Capturar la información modificada*/
const formulario = document.querySelector("[data-form__actualizar-product]");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    const imagen = document.querySelector("[data-imagen]").value;
    const nombre = document.querySelector("[data-nombreproducto]").value;
    const categoria = document.querySelector("[data-categoria]").value;
    const precio = document.querySelector("[data-precio]").value;
    const forma = document.querySelector("[data-forma]").value;
    const tipo = document.querySelector("[data-tipo]").value;
    const luz = document.querySelector("[data-luz]").value;
    const materiales = document.querySelector("[data-materiales]").value;

    productosServices.actualizarPorducto(id, imagen, nombre, categoria, precio, forma, tipo, luz, materiales)
    .then( () => {
        window.location.href = "exitosoAdmin.html";
    })
    
})