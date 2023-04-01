const headerPrincipal = document.querySelector(".header");

const header_ctn = document.createElement('div');
headerPrincipal.appendChild(header_ctn);
header_ctn.classList.add("header-ctn");

    const logo = document.createElement("div");
    header_ctn.appendChild(logo);
    logo.classList.add("logo");

        const logo_link = document.createElement("a");
        logo.appendChild(logo_link);
        logo_link.classList.add("logo__link");
        logo_link.href = "cerrar-sesion_admin.html";

            const img = document.createElement("img");
            logo_link.appendChild(img);
            img.classList.add("logo__img");
            
                img.src = "assets/img/logo-blanco.png";
                img.alt = "logo de papel y cristal";

    const cnt_icons = document.createElement("div");
    header_ctn.appendChild(cnt_icons);
    cnt_icons.classList.add("cnt-icons");

        const input_search = document.createElement("input");
        cnt_icons.appendChild(input_search);
        input_search.classList.add("input_search");
        input_search.type = "search";
        input_search.placeholder = "Buscar Producto";

    