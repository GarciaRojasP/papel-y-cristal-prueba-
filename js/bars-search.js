/*Animar input search*/
document.querySelector(".ctn-icon-search").addEventListener("click",animarsearch);

const bars_search = document.querySelector(".ctn-bars-search");
const inputsearch =  document.querySelector(".inputSearch");
const contenedor_box = document.querySelector(".contenedor-box");
const cover_ctn_search = document.querySelector(".cover-ctn-search");

function animarsearch(){

    bars_search.style.top= "90px";
    cover_ctn_search.style.display= "block"; 
    inputsearch.focus();
    cover_ctn_search.addEventListener("click",ocultarbuscador);
}

function ocultarbuscador(){
    bars_search.style.top= "-1px";
    cover_ctn_search.style.display= "none";
    inputsearch.value = ""; 
    contenedor_box.style.display = "none";
}
