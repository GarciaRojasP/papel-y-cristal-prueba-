export const validarFormulario = (inputTipo) => {
    const input = inputTipo.target;
    const tipoDeInput = input.dataset.product;
    console.log(input);
    console.log(tipoDeInput);

    if(input.validity.valid){
        input.parentElement.classList.remove("formulario__grupo-incorrecto");
        input.parentElement.classList.add("formulario__grupo-correcto");
        input.parentElement.querySelector(".formulario__validacion-estado").classList.remove("fa-circle-xmark");
        input.parentElement.querySelector(".formulario__validacion-estado").classList.add("fa-circle-check");
        input.parentElement.querySelector(".formulario__input-error").classList.remove("formulario__input-error-activo");
    }else{
        input.parentElement.classList.add("formulario__grupo-incorrecto");
        input.parentElement.classList.remove("formulario__grupo-correcto");
        input.parentElement.querySelector(".formulario__validacion-estado").classList.remove("fa-circle-check");
        input.parentElement.querySelector(".formulario__validacion-estado").classList.add("fa-circle-xmark");
        input.parentElement.querySelector(".formulario__input-error").innerHTML = mostrarMensajeDeError(tipoDeInput,input);
    }   
}

const tipoDeErrores =[
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
]

const mensajesDeError = {

    imagen: {
        valueMissing: "Ingrese la URL de la imagen",
        typeMismatch: "La URL no es valido",
        patternMismatch: "verifica tu URL",
    },
    nombre: {
        valueMissing: "Ingrese el nombre del producto",
        patternMismatch: "Solo se acepta letras",
    },
    categoria: {
        valueMissing: "Este campo no puede estar vacio",
        patternMismatch: "Solo se acepta letras",
    },
    precio: {
        valueMissing: "Este campo no puede estar vacio",
        patternMismatch: "Debe contener $,números,punto y dos números decimales",
        typeMismatch: "El no es válido ($130.00)",
    },
    forma: {
        valueMissing: "Este campo no puede estar vacio",
    },
    medida: {
        valueMissing: "Este campo no puede estar vacio",
        patternMismatch: "se permite letras mayúsculas, minuscula, guió media",
    },
    luz: {
        valueMissing: "Este campo no puede estar vacio",
        patternMismatch: "Se acepta dos caracteres",

    },
    materiales: {
        valueMissing: "Este campo no puede estar vacio",
        patternMismatch: "Máximo se aceptan 500 caracteres",
    },
}

function mostrarMensajeDeError(tipoDeInput,input){
    let mensaje = "";
    tipoDeErrores.forEach(error => {
        if(input.validity[error]){
            console.log(tipoDeInput,error);
            console.log(input.validity[error]);
            console.log(mensajesDeError[tipoDeInput][error]);
            mensaje = mensajesDeError[tipoDeInput][error];
        }
    })
    return mensaje
}