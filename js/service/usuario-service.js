/*Recibir toda la información de nuestra base de datos*/
const listUsuario = () => 
    fetch("https://papel-y-cristal.onrender.com/usuarios")
        .then((response) => response.json())
        .catch((error) => alert("Ocurrio un error"));

const registrarUsuario = (nombre,email,usuario,password) => 
     fetch("https://papel-y-cristal.onrender.com/usuarios", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({id: uuid.v4(), nombre, email, usuario, password})
     })
     .then((respuesta) => { console.log(respuesta);
    }).catch((error) => alert("Ocurrio un error"))

export const usuariosServices = {
    listUsuario,
    registrarUsuario,
}