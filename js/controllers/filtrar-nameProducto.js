import { productosServices } from "../service/product-service.js";

const search = document.querySelector("[data-search]");
const box_search__lista = document.querySelector(".box-search__lista");

const crearNuevoListaItems = (nombre) => {

    const lista = document.createElement("li");
    lista.classList.add("box-search__iten");
    const contenido = `
    <li class="box-search__iten"><a href="#" class="box-search__link"><i class="fa-solid fa-magnifying-glass box-search-icon"></i>${nombre}</a></li>
    `
    lista.innerHTML = contenido;

    return lista;
}

var data = fetch("https://papel-y-cristal.onrender.com/productos")
    .then((response) => response.json())
    .then((json) => (data = json));

search.addEventListener("keyup", () => {
    
    var valueInput = search.value.replace().toLowerCase();
    var productos = data.filter((data) => data.nombre.toLowerCase().includes(valueInput));

    if(valueInput !== "" && valueInput !== null) {
        productos.forEach(({nombre}) => {
            const nuevoListaItems =  crearNuevoListaItems(nombre);
            box_search__lista.appendChild(nuevoListaItems);
    })
    }
    
})