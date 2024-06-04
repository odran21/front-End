// seleccionamos el elemento al que le vamos a ESCUCHAR al dar click.
const navbarEmail = document.querySelector('.navbar-email');
const burguerIcon = document.querySelector('.burguer-icon');
const aside = document.querySelector('.navbar-shopping-cart');

// seleccionamos el elemento al que le vamos a MOSTRAR al dar click.
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const asideKart = document.querySelector('.product-detail');

navbarEmail.addEventListener('click', toggleDesktopMenu);
burguerIcon.addEventListener('click', toggleMobileMenu);
aside.addEventListener('click', toggleKartMenu);

function toggleDesktopMenu() {
    const isAsideKartClosed = asideKart.classList.contains('inactive');

    if(!isAsideKartClosed) {
        asideKart.classList.toggle('inactive');
    }

    desktopMenu.classList.toggle('inactive');
    navbarEmail.classList.toggle('active');
}

function toggleMobileMenu() {
    const isMenuKartClosed = aside.classList.contains('inactive');

    if(!isMenuKartClosed) {
        asideKart.classList.toggle('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function toggleKartMenu() {
    const isMenuMobileClosed = mobileMenu.classList.contains('inactive');

    if(!isMenuMobileClosed) {
        mobileMenu.classList.toggle('inactive');
    }
    asideKart.classList.toggle('inactive');
}