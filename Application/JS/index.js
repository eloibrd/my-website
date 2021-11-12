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

initNavbar();

