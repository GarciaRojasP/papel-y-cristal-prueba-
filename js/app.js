import { expresionesRegulares } from "./expresionesRegulares.js";
import { validarFormulario } from "./validaciones.js";

/*Llamando todos los inputs*/

const inputs = document.querySelectorAll("form input,textarea");

inputs.forEach((input)=>{
    input.addEventListener("keyup",validarFormulario);
    input.addEventListener("blur",validarFormulario);
    input.addEventListener("focus",(input) =>{
        expresionesRegulares(input.target);
    })
})

const formulario = document.querySelector("form");

const btn = document.querySelector("button");
btn.disabled = true;

formulario.addEventListener("input",() => {
    btn.disabled = !formulario.checkValidity();
})


