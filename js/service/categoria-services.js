/*Recibir toda la información de nuestra base de datos*/
const listaCategoria = async () => 
    fetch("https://papel-y-cristal.onrender.com/categorias")
        .then( (response) => response.json())
        .catch((error) => alert("Ocurrio un error"));

export const categoriaServices = {
    listaCategoria,
}; 