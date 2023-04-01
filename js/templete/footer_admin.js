const pieDePagina = document.querySelector("footer");
pieDePagina.classList.add("footer");

    const footer_contenedor = document.createElement("div");
    pieDePagina.appendChild(footer_contenedor);
    footer_contenedor.classList.add("footer__contenedor");

        const footer_logo = document.createElement("div");
        footer_contenedor.appendChild(footer_logo);
        footer_logo.classList.add("footer__logo");

            const footer_logo_img = document.createElement("img");
            footer_logo.appendChild(footer_logo_img);
            footer_logo_img.classList.add("footer-logo__img");
            footer_logo_img.src = "../assets/img/logo-blanco.png";
            footer_logo_img.alt= "logo de Papel y Cristal";

        const degradado = document.createElement("div");
        footer_contenedor.appendChild(degradado);
        degradado.classList.add("degradado");


        const footer_copyright = document.createElement("div");
        footer_contenedor.appendChild(footer_copyright);
        footer_copyright.classList.add("footer__copyright");

            const footer_dato = document.createElement("p");
            footer_copyright.appendChild(footer_dato);
            footer_dato.classList.add("footer__dato");

            footer_dato.innerHTML = "&copy copyright Papel y  Cristal 2023 | Patricia García";
