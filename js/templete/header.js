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
        logo_link.href = "loginAdmin.html";

            const img = document.createElement("img");
            logo_link.appendChild(img);
            img.classList.add("logo__img");
            
                img.src = "assets/img/logo-blanco.png";
                img.alt = "logo de papel y cristal";

    const cnt_icons = document.createElement("div");
    header_ctn.appendChild(cnt_icons);
    cnt_icons.classList.add("cnt-icons");

        const ctn_icon_search = document.createElement("div");
        cnt_icons.appendChild(ctn_icon_search);
        ctn_icon_search.classList.add("ctn-icon-search");

            const icon_busqueda = document.createElement("i");
            ctn_icon_search.appendChild(icon_busqueda);
            icon_busqueda.classList.add("fa-solid", "fa-magnifying-glass", "icon-search");

        const ctn_icon_car = document.createElement("div");
        cnt_icons.appendChild(ctn_icon_car);
        ctn_icon_car.classList.add("ctn-icon-car");

            const icon_car = document.createElement("i");
            ctn_icon_car.appendChild(icon_car);
            icon_car.classList.add("fa-solid", "fa-cart-shopping", "icon-car");

        const bars_menu = document.createElement("div");
        cnt_icons.appendChild(bars_menu);
        bars_menu.classList.add("bars-menu");

            const bars_menu__linea1 = document.createElement("span");
            const bars_menu__linea2 = document.createElement("span");
            const bars_menu__linea3 = document.createElement("span");
            bars_menu.append(bars_menu__linea1, bars_menu__linea2, bars_menu__linea3);
            bars_menu__linea1.classList.add("bars-menu__linea1");
            bars_menu__linea2.classList.add("bars-menu__linea2");
            bars_menu__linea3.classList.add("bars-menu__linea3");

    const menu = document.createElement("nav");
    header_ctn.appendChild(menu);
    menu.classList.add("menu");

        const menu_lista = document.createElement("ul");
        menu.appendChild(menu_lista);
        menu_lista.classList.add("menu__lista");

            const menu_item1 = document.createElement("li");
            const menu_item2 = document.createElement("li");
            const menu_item3 = document.createElement("li");
            const menu_item4 = document.createElement("li");
            menu_lista.append(menu_item1, menu_item2, menu_item3, menu_item4);
            menu_item1.classList.add("menu__item");
            menu_item2.classList.add("menu__item");
            menu_item3.classList.add("menu__item");
            menu_item4.classList.add("menu__item");

                const menu_link1 = document.createElement("a");
                const menu_link2 = document.createElement("a");
                const menu_link3 = document.createElement("a");
                const menu_link4 = document.createElement("a");
                menu_item1.appendChild(menu_link1);
                menu_item2.appendChild(menu_link2);
                menu_item3.appendChild(menu_link3);
                menu_item4.appendChild(menu_link4);
                menu_link1.classList.add("menu__link");
                menu_link2.classList.add("menu__link");
                menu_link3.classList.add("menu__link");
                menu_link4.classList.add("menu__link");

                    menu_link1.innerHTML = "inicio";
                    menu_link2.innerHTML = "Productos";
                    menu_link3.innerHTML = "contacto";
                    menu_link4.innerHTML = "Iniciar Sesión";

                    menu_link1.href = "index.html";
                    menu_link2.href = "productos.html";
                    menu_link3.href = "contacto.html";
                    menu_link4.href = "loginUsuario.html";

    const menu2 = document.createElement("nav");
    header_ctn.appendChild(menu2);
    menu2.classList.add("nav");

        const menu2_lista = document.createElement("ul");
        menu2.appendChild(menu2_lista);
        menu2_lista.classList.add("nav__lista");

            const menu2_item1 = document.createElement("li");
            const menu2_item2 = document.createElement("li");
            const menu2_item3 = document.createElement("li");
            const menu2_item4 = document.createElement("li");
            menu2_lista.append(menu2_item1, menu2_item2, menu2_item3, menu2_item4);
            menu2_item1.classList.add("nav__item");
            menu2_item2.classList.add("nav__item");
            menu2_item3.classList.add("nav__item");
            menu2_item4.classList.add("nav__item");

                const menu2_link1 = document.createElement("a");
                const menu2_link2 = document.createElement("a");
                const menu2_link3 = document.createElement("a");
                const menu2_link4 = document.createElement("a");
                menu2_item1.appendChild(menu2_link1);
                menu2_item2.appendChild(menu2_link2);
                menu2_item3.appendChild(menu2_link3);
                menu2_item4.appendChild(menu2_link4);
                menu2_link1.classList.add("nav__link");
                menu2_link2.classList.add("nav__link");
                menu2_link3.classList.add("nav__link");
                menu2_link4.classList.add("nav__link");

                    menu2_link1.innerHTML = "inicio";
                    menu2_link2.innerHTML = "Productos";
                    menu2_link3.innerHTML = "contacto";
                    menu2_link4.innerHTML = "Iniciar Sesión";

                    menu2_link1.href = "index.html";
                    menu2_link2.href = "productos.html";
                    menu2_link3.href = "contacto.html";
                    menu2_link4.href = "loginUsuario.html";
