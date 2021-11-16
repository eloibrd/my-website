// When the user scrolls the page, execute myFunction
window.onscroll = function () { stickNavbar() };

// Get the navbar
var navbar = document.getElementsByClassName("navbar")[0];

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

function showTopArrow() {
    var top_arrow = document.getElementById('fixed-top-arrow');
    if (window.pageYOffset >= sticky) {
        top_arrow.hidden = false;
    } else {
        top_arrow.hidden = false;
    }
}

showTopArrow()
