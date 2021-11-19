/**
 * Met à jour l'élément de navigation actif
 * @param {String} id l'id du nav-item qui devient actif
 */
function setActiveNavLink(id) {
    var activeNavLink = document.getElementsByClassName("nav-item active")[0];
    activeNavLink.classList.remove('active');
    var newActiveNavLink = document.getElementById(id);
    newActiveNavLink.classList.add('active');
}

/**
 * Charge le changement d'élément actif sur les éléments de la navbar
 */
function initNavbar() {
    var nav_items = document.getElementsByClassName("nav-item");
    Array.from(nav_items).forEach(nav_item => {
        nav_item.addEventListener("click", () => { setActiveNavLink(nav_item.id); });
    });
}

initNavbar();

// trouver la navbar
var navbar = document.getElementsByClassName("navbar")[0];
// récupérer l'offset haut de la navbar
var sticky = navbar.offsetTop;
/**
 * Rend la navbar sticky en haut de page quand on scroll en dessous du header et qu'il n'est plus visible
 */
function stickNavbar() {
    // icon à gauche du header
    var header_icon = document.getElementById("header-icon");
    // place holder de l'icon pour le flex layout
    var header_icon_placerholder = document.getElementById("header-icon-placerholder");

    var main_container = document.getElementById("main-container");

    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
        // on affiche pas l'icon si on est sur mobile
        if (document.documentElement.clientWidth >= 601) {
            header_icon.hidden = false;
            header_icon_placerholder.hidden = true;
        }
        // ajoute le padding pour compenser la fixation de la navbar
        main_container.classList.add("padding_top");
    } else {
        navbar.classList.remove("sticky");
        // on affiche pas l'icon si on est sur mobile
        if (document.documentElement.clientWidth >= 601) {
            header_icon.hidden = true;
            header_icon_placerholder.hidden = false;
        }
        // enlève le padding qui compense la fixation de la navbar
        main_container.classList.remove("padding_top");
    }
}

