import { usuariosServices } from "../service/usuario-service.js";

const formularioRegistro = document.querySelector("[data-registro]");

formularioRegistro.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const nombre = document.querySelector("[data-registro] [data-nombre]").value;
    const email = document.querySelector("[data-registro] [data-email]").value;
    const usuario = document.querySelector("[data-registro] [data-usuario]").value;
    const password = document.querySelector("[data-registro] [data-password]").value;

    usuariosServices.registrarUsuario(nombre,email,usuario,password)
    .then((response) => {
        window.location.href ="exitosoRegistroUsuario.html";
    }).catch((erro) => alert("Ocurrio un erro, intentelo más tarde"))

})