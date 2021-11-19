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

const sections = document.querySelectorAll("section");
const navItems = document.getElementsByClassName("nav-item");
/**
 * Met à jour l'élément de navigation actif lors du scroll
 */
function changeActiveOnScroll() {
    var current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 52) {
            current = section.getAttribute("id");
        }
    });

    Array.prototype.forEach.call(navItems, (item) => {
        item.classList.remove("active");
        if (item.classList.contains(current)) {
            item.classList.add("active");
        }
    });
};

