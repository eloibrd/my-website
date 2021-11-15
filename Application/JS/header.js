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
    var header_icon = document.getElementById("header_icon");
    var header_icon_placerholder = document.getElementById("header_icon_placerholder");
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
        header_icon.hidden = false;
        header_icon_placerholder.hidden = true;
    } else {
        navbar.classList.remove("sticky");
        header_icon.hidden = true;
        header_icon_placerholder.hidden = false;
    }
}

initNavbar();

