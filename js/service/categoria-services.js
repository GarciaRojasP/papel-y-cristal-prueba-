/*Recibir toda la información de nuestra base de datos*/
const listaCategoria = async () => 
    fetch("http://localhost:3000/categorias")
        .then( (response) => response.json())
        .catch((error) => alert("Ocurrio un error"));

export const categoriaServices = {
    listaCategoria,
}; 