/*llamamos los datos de admin*/

const listAdmin = async () => 
    fetch("https://papel-y-cristal.onrender.com/admin")
        .then( (response) => response.json())
        .catch((error) => alert("Ocurrio un error"));

export const adminServices = {
    listAdmin,
}; 