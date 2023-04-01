var imagenes = [
                "assets/img/banners/banner1(desk).jpg",
                "assets/img/banners/banner2(desk).jpg",
                "assets/img/banners/banner3(desk).jpg"
               ]

var contador = 0;

function moverSlider(){
    if(contador > imagenes.length - 1){
        contador = 0;
    }else if (contador < 0) {
        contador = imagenes.length - 1;
    }
}

function moverRight(){
    contador++;
    moverSlider();
    document.querySelector(".slider__img").src = imagenes[contador];
}

var intervalo = setInterval(moverRight,3000);

function intervaloRigth(){
    clearInterval(intervalo);
    moverRight();
    intervalo = setInterval(moverRight,3000);
}

function moverLeft(){
    contador--;
    moverSlider();
    document.querySelector(".slider__img").src = imagenes[contador];
}

function intervaloLeft(){
    clearInterval(intervalo);
    moverLeft();
    intervalo = setInterval(moverLeft,3000);
}

/*Cargar slider*/
document.querySelector(".slider__img").src = imagenes[0];
/*document.imagen.src = imagenes[0];*/

/*Animación slider*/
document.querySelector(".ctn-icon__left").addEventListener("click",intervaloLeft);
document.querySelector(".ctn-icon__right").addEventListener("click", intervaloRigth);