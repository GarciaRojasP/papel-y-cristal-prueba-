import { productosServices } from "../service/product-service.js";

const crearNuevaLinea = (id, imagen, nombre, categoria, precio, forma, tipo, luz, materiales) => {

    const linea = document.createElement("tr");
    const contenido = `
        <td class="td" data-td>
        <img src="${imagen}" alt="Ajolote" class="img-product-td">
        </td>
        <td>${nombre}</td>
        <td>${categoria}</td>
        <td>${precio}</td>
        <td>${forma}</td>
        <td>${tipo}</td>
        <td>${luz}</td>
        <td>${materiales}</td>
        <td>
            <ul class="table__btn">
                <li>
                <a href="actualizar_producto.html?id=${id}" class="simple-button simple-button--edit">
                    <i class="fa-solid fa-pencil icon icon-edit"></i>
                </a>
                </li>
                <li>
                <button class="btn-delete" id="${id}" data-delete>
                    <i class="fa-solid fa-trash-can icon icon-delete"></i>
                </button>
                </li>
            </ul>
        </td>
    `
    linea.innerHTML = contenido;

    /*Elimanar los productos*/
    const btn_delete = linea.querySelector("[data-delete]");
    
    btn_delete.addEventListener("click", () => {
        const idProducto = btn_delete.id;

        productosServices.eliminarProducto(id)
            .then(respuesta => {
                window.location.href ="exitosoAdmin.html";
            }).catch((err) => alert("ocurrio algun error"))

    });

    return linea;
}

const table = document.querySelector("[data-table]"); /*tbody*/;


productosServices.listaProducto()
    .then((data) => {
        data.forEach( ({id, imagen, nombre, categoria, precio, forma, tipo, luz, materiales}) => {
            const nuevaLinea = crearNuevaLinea(id, imagen, nombre, categoria, precio, forma, tipo, luz, materiales);
            table.appendChild(nuevaLinea);
        })
    })
    .catch((error) => alert("Ocurrió un error"));
