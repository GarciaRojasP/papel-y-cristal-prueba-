import { productosServices } from "../service/product-service.js";

const obtenerInformacion = () => {
    const url = new URL(window.location);
    console.log(url);
    const id = url.searchParams.get("id");
    console.log(id);

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
            imagen.src = producto.imagen;
            imagen.alt = producto.imagen;
            nombre.innerHTML = producto.nombre;
            categoria.innerHTML = producto.categoria;
            precio.innerHTML = producto.precio;
            forma.innerHTML = producto.forma;
            tipo.innerHTML = producto.tipo;
            luz.innerHTML = producto.luz;
            materiales.innerHTML = producto.materiales;

            console.log(tipo);
            
        }
        );

}

obtenerInformacion();
