/*Recibir toda la información de nuestra base de datos*/
const listUsuario = () => 
    fetch("http://localhost:3000/usuarios")
        .then((response) => response.json())
        .catch((error) => alert("Ocurrio un error"));

const registrarUsuario = (nombre,email,usuario,password) => 
     fetch("http://localhost:3000/usuarios", {
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