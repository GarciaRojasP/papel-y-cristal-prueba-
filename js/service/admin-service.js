/*llamamos los datos de admin*/

const listAdmin = async () => 
    fetch("http://localhost:3000/admin")
        .then( (response) => response.json())
        .catch((error) => alert("Ocurrio un error"));

export const adminServices = {
    listAdmin,
}; 