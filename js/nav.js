let headerToggler = document.querySelector('.header__toggler');
let navToggler = document.querySelector('.nav__toogler--exit');
let nav = document.querySelector('.nav');

const ChangeToggler = () => {
    headerToggler.classList.toggle('active');
    nav.classList.toggle('active');
}

headerToggler.addEventListener('click', ChangeToggler);

navToggler.addEventListener('click', ChangeToggler);