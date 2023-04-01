export function expresionesRegulares(input){
    const tipoDeInput = input.dataset.product;
    const reg = expresiones[tipoDeInput];
    input.setAttribute("pattern",reg);
} 

const expresiones = {
    
    imagen: "[s\\S]{0,50}",

    nombre: "^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$",

    categoria: "[A-Za-z ]",

    precio: "^[$]+[0-9]+[.,]{1,1}\[0]{2,2}$",

    forma: "[s\\S]",

    medida: "/^[a-zñ\s.-°]*$/",

    luz: "[A-Za-z]{2}",

    meteriales: "[s\\S]{30,500}",
}