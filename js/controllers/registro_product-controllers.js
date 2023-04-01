import { productosServices } from "../service/product-service.js";

const formulario = document.querySelector("[data-form__registrar-product]");

/*const seleccionarImagen = document.querySelector("[data-imagen]");
const imgMostrado = document.querySelector("[data-img-mostrado]");

seleccionarImagen.addEventListener("change", (evento) => {
    const archivos = seleccionarImagen.files;
    if(!archivos || !archivos.length){
        imgMostrado.src = "";
        return
    }else{
        const imagenCargado = archivos[0];
        const objectUrl = evento.target.resultado;
        console.log(objectUrl);
        imgMostrado.src = objectUrl;
    }
})*/

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const imagen = document.querySelector("[data-imagen]").value;
    const nombre = document.querySelector("[data-nombreproducto]").value;
    const categoria = document.querySelector("[data-categoria]").value;
    const precio = document.querySelector("[data-precio]").value;
    const forma = document.querySelector("[data-forma]").value;
    const tipo = document.querySelector("[data-tipo]").value;
    const luz = document.querySelector("[data-luz]").value;
    const materiales = document.querySelector("[data-materiales]").value;

    productosServices.crearProducto(imagen, nombre, categoria, precio, forma, tipo, luz, materiales)
    .then((response) => {
            window.location.href ="exitosoAdmin.html";
        }).catch((erro) => alert("Ocurrio un erro, intentelo más tarde"))

})