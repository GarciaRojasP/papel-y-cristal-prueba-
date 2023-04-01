import { adminServices } from "../service/admin-service.js";

const formulario = document.querySelector("form");

formulario.addEventListener("submit", (evento) =>{
    evento.preventDefault();

    const emailIngresado = document.querySelector("[data-email]").value;
    const passwordIngresado = document.querySelector("[data-password]").value;

    adminServices.listAdmin()
        .then((data) => {
           data.forEach(({email,password}) => {

            if (email === emailIngresado && password === passwordIngresado) {
                window.location.href = "lista_productos.html";
            } else { 
               if(email === emailIngresado || password === passwordIngresado){
                    alert("verifica tus datos")
                } else{
                    alert("Usted no pertenece al sistema");
                }
              }

            })
        }).catch((err) => console.log("No se pudo cargar el sistema"));
});


/*try {
    const listaAdmi = await adminServices.listAdmin()
    listaAdmi.forEach(({email,password}) => {
      if (email === emailIngresado && password === passwordIngresado) {
        window.location.href = 'lista_productos.html'
      } else {
       console.log("verifica tus datos")
      }
    })
  } catch (error) {
    console.log("error");
  }*/