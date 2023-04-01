/*Recibir toda la información de nuestra base de datos*/
const listaProducto = async () => 
    fetch("http://localhost:3000/productos")
        .then( (response) => response.json())
        .catch((error) => alert("Ocurrio un error"));


/*Para agregar un nuevo producto a nuestra base de datos */
const crearProducto = (imagen, nombre, categoria, precio, forma, tipo, luz, materiales) => 
    fetch("http://localhost:3000/productos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({id: uuid.v4(), imagen, nombre, categoria, precio, forma, tipo, luz, materiales})
    })


/*Eliminar algun dato de nuestra base de datos*/
const eliminarProducto = (id) => { /*Agregar return*/
    return fetch(`http://localhost:3000/productos/${id}`, { /*Agregar un backti para agregar el id que recibimos*/
        method: "DELETE"
    })
        .then ((respuesta) => console.log("Se elimino el producto exitosamente"))
        .catch((error) => alert("Ocurrio un error"))
}

/*Actualizar alguna información de nuestra base de datos: tendremos que realizar dos peticiónes para realizar esta acción*/
const detalleProducto = (id) => {
    return fetch(`http://localhost:3000/productos/${id}`)
        .then((respuesta) => respuesta.json())
        .catch((error) => alert("Ocurrio un error"))
}

const actualizarPorducto = (id, imagen, nombre, categoria, precio, forma, tipo, luz, materiales) => { /*importa el oreden de las variables*/
    return fetch(`http://localhost:3000/productos/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({id, imagen, nombre, categoria, precio, forma, tipo, luz, materiales})
    })
    .then((respuesta) => console.log("Se ejecuto correctamente"))
    .catch((error) => alert("Ocurrio un error"))

}

/*filtrado*/
const filtradoProducto = async (categoria) => {
    return fetch(`http://localhost:3000/productos?categoria=${categoria}`)
    .then( (response) => response.json())
    .catch((error) => alert("Ocurrio un error"))
}
export const productosServices = {
    listaProducto,
    crearProducto,
    eliminarProducto,
    detalleProducto,
    actualizarPorducto,
    filtradoProducto,
};   
