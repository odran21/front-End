// seleccionamos el elemento al que le vamos a ESCUCHAR al dar click.
const navbarEmail = document.querySelector('.navbar-email');
const burguerIcon = document.querySelector('.burguer-icon');

// seleccionamos el elemento al que le vamos a MOSTRAR al dar click.
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');

navbarEmail.addEventListener('click', toggleDesktopMenu);
burguerIcon.addEventListener('click', toggleMobileMenu);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
    navbarEmail.classList.toggle('active');
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
}