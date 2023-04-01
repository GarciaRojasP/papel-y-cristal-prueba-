const cover_gallery = document.querySelector(".gallery-imgs");
const gallery_img = document.querySelector(".gallery__img");
const close_gallery = document.querySelector(".close-gallery");

function closeGalery(){
    cover_gallery.style.display = "none";
}

export function openGalery(srcImg){
    var src_Img = srcImg.currentSrc;
    cover_gallery.style.display = "flex";
    gallery_img.src = src_Img;
    close_gallery.addEventListener("click",closeGalery);
}