// seleccionamos el elemento al que le vamos a ESCUCHAR al dar click.
const navbarEmail = document.querySelector('.navbar-email');
// seleccionamos el elemento al que le vamos a MOSTRAR al dar click.
const desktopMenu = document.querySelector('.desktop-menu');

navbarEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
    navbarEmail.classList.toggle('active');
}