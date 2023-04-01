const box_login = document.querySelector(".box-login");
const box_registro = document.querySelector(".box-registro");

const ctn_formularios = document.querySelector(".ctn-formularios");

const formulario__login = document.querySelector(".formulario__login");
const formulario__registrarse = document.querySelector(".formulario__registrarse");

const btn__iniciar_sesion =document.querySelector(".btn__iniciar-sesion");
const btn__registrase =document.querySelector(".btn__registrase");

function resizePagina(){
    if(window.innerWidth > 850){
        box_login.style.display = "block";
        box_registro.style.display = "block";
    }else{
        box_registro.style.display = "block";
        box_registro.style.opacity = "1";
        box_login.style.display = "none";
        formulario__login.style.display = "block";
        formulario__registrarse.style.display = "none";
        ctn_formularios.style.left = "0";
    }
}

window.addEventListener("resize", resizePagina);

function iniciarSecion(){
    if(window.innerWidth > 850){
        formulario__registrarse.style.display = "none";
        ctn_formularios.style.left = "10px";
        formulario__login.style.display = "block";
        box_registro.style.opacity = "1";
        box_login.style.opacity = "0";
    }else{
        formulario__registrarse.style.display = "none";
        ctn_formularios.style.left = "0px";
        formulario__login.style.display = "block";
        box_registro.style.display = "block";
        box_login.style.display = "none";
    }
}
btn__iniciar_sesion.addEventListener("click",iniciarSecion);


function iniciarRegistro(){

    if (window.innerWidth > 850){
        formulario__registrarse.style.display = "block";
        ctn_formularios.style.left = "395px";
        formulario__login.style.display = "none";
        box_registro.style.opacity = "0";
        box_login.style.opacity = "1";
    }else{
        formulario__registrarse.style.display = "block";
        ctn_formularios.style.left = "0px";
        formulario__login.style.display = "none";
        box_registro.style.display = "none";
        box_login.style.display = "block";
        box_login.style.opacity = "1";
    }   
}

btn__registrase.addEventListener("click",iniciarRegistro);
