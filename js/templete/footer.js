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
            footer_logo_img.src = "assets/img/logo-blanco.png";
            footer_logo_img.alt= "logo de Papel y Cristal";

    const nav_footer = document.createElement("nav");
    footer_contenedor.appendChild(nav_footer);
    nav_footer.classList.add("nav-footer");

        const nav_footer_lista = document.createElement("ul");
        nav_footer.appendChild(nav_footer_lista);
        nav_footer_lista.classList.add("nav-footer__lista");

            const nav_footer_item1 = document.createElement("li");
            const nav_footer_item2 = document.createElement("li");
            const nav_footer_item3 = document.createElement("li");

            nav_footer_lista.append(nav_footer_item1, nav_footer_item2, nav_footer_item3);

            nav_footer_item1.classList.add("nav-footer__item");
            nav_footer_item2.classList.add("nav-footer__item");
            nav_footer_item3.classList.add("nav-footer__item");

                const nav_footer_link1 = document.createElement("a");
                const nav_footer_link2 = document.createElement("a");
                const nav_footer_link3 = document.createElement("a");

                nav_footer_item1.appendChild(nav_footer_link1);
                nav_footer_item2.appendChild(nav_footer_link2);
                nav_footer_item3.appendChild(nav_footer_link3);

                nav_footer_link1.classList.add("nav-footer__link");
                nav_footer_link2.classList.add("nav-footer__link");
                nav_footer_link3.classList.add("nav-footer__link");

                nav_footer_link1.href= "#";
                nav_footer_link2.href= "#";
                nav_footer_link3.href= "#";

                nav_footer_link1.innerHTML= "¿Quiénes somos?";
                nav_footer_link2.innerHTML= "Políticas de privacidad";
                nav_footer_link3.innerHTML= "Programa de fidelidad";

    const degradado = document.createElement("div");
    pieDePagina.appendChild(degradado);
    degradado.classList.add("degradado");

    const footer_contenedor2 = document.createElement("div");
    pieDePagina.appendChild(footer_contenedor2);
    footer_contenedor2.classList.add("footer__contenedor2");

        const footer_copyright = document.createElement("p");
        footer_contenedor2.appendChild(footer_copyright);
        footer_copyright.classList.add("footer__copyright");

        footer_copyright.innerHTML = "&copy copyright Papel y  Cristal 2023 | Patricia García";
