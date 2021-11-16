function initNavbar() {
    var nav_items = document.getElementsByClassName("nav-item");
    Array.from(nav_items).forEach(nav_item => {
        nav_item.addEventListener("click", () => { setActiveNavLink(nav_item.id); });
    });
}

function setActiveNavLink(id) {
    var activeNavLink = document.getElementsByClassName("nav-item active")[0];
    activeNavLink.classList.remove('active');
    var newActiveNavLink = document.getElementById(id);
    newActiveNavLink.classList.add('active');
}

// When the user scrolls the page, execute myFunction
window.onscroll = function () { stickNavbar() };

// Get the navbar
var navbar = document.getElementsByClassName("navbar")[0];

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickNavbar() {
    var header_icon = document.getElementById("header-icon");
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

initNavbar();

