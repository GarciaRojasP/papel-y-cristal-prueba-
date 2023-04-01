import { usuariosServices } from "../service/usuario-service.js";

const formularioLogin = document.querySelector("[data-login]");

formularioLogin.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const emailVerificar = document.querySelector("[data-login] [data-emaillogin]").value;
    const passwordVerificar = document.querySelector("[data-login] [data-passwordlogin]").value;

    usuariosServices.listUsuario()
        .then((data) => {
            data.forEach(({email,password}) => {
                if(email === emailVerificar && password === passwordVerificar){
                    window.location.href = "index.html";
                }else{
                    if(email === emailVerificar || password === passwordVerificar){
                        alert("verifica tus datos")
                    } else{
                        alert("Usted no pertenece al sistema");
                    }
                }
            })
        }).catch((error) => alert("A ocurrido un error"));

})