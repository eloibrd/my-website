/**
 * Build the go to top of the page arrow
 */
function buildTopArrow() {
    // on récupère le placeholder
    var top_arrow = document.getElementById('top-arrow-placeholder');
    // <a> container
    var link = document.createElement('a');
    link.classList.add("arrow-up", "fixed-top-arrow");
    link.id = 'arrow-up';
    link.href = "#top";
    // left arm
    var spanLeft = document.createElement('span');
    spanLeft.classList.add('left-arm');
    // right arm
    var spanRight = document.createElement('span');
    spanRight.classList.add('right-arm');
    // slide
    var spanSlide = document.createElement('span');
    spanSlide.classList.add('arrow-slide');

    // ajout à la page
    link.append(spanLeft, spanRight, spanSlide);
    top_arrow.appendChild(link);
}

/**
 * Remove the go to top of the page arrow
 */
function removeTopArrow() {
    // on récupère le placeholder
    var arrow_up = document.getElementById('arrow-up');
    arrow_up.parentNode.removeChild(arrow_up);
}

// Get the navbar
var navbar = document.getElementsByClassName("navbar")[0];
// Get the offset position of the navbar
var sticky = navbar.offsetTop;

/**
 * Affiche ou masque la flèche de retour en haut de page
 */
function showTopArrow() {
    if (window.pageYOffset >= sticky) {
        if (!document.getElementById('arrow-up')) buildTopArrow();
    } else {
        if (!!document.getElementById('arrow-up')) removeTopArrow();
    }
}
