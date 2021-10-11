let btnComuna = document.getElementById('btnComuna');

let boxComuna = document.querySelector('.comuna__box');

btnComuna.addEventListener('mouseover', () => {
    boxComuna.classList.add('active');
});

btnComuna.addEventListener('mouseout', () => {
    boxComuna.classList.remove('active');
});
