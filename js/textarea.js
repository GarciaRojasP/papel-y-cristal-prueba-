/*Funcion textarea*/
document.querySelector("textarea").addEventListener("input",autoheight,false);

export function autoheight(){

    this.style.height = this.scrollHeight + 'px';
}