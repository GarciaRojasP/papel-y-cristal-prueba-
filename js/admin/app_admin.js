import { validarFormulario } from "../admin/validaciones_admin.js";
import { expresionesRegulares } from "../expresionRegulares_admin.js";
import { autoheight } from "../textarea.js";


/*Llamando todos los inputs*/
const formulario = document.querySelector("form");
const inputs = document.querySelectorAll("form input,textarea,select");
const btn = document.querySelector("button");

inputs.forEach((input)=>{
    input.addEventListener("keyup",validarFormulario);
    input.addEventListener("blur",validarFormulario);
    input.addEventListener("focus",(input) =>{
        expresionesRegulares(input.target);
    })
    expresionesRegulares(input);
})  

formulario.addEventListener("input",() => {
     !formulario.checkValidity();
})


/*Funcion textarea*/
document.querySelector("textarea").addEventListener("input",autoheight,false);