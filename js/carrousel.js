// Declaracion de variables
let btnCarrousel = document.querySelectorAll('.carrousel__btn');
let imageCarrousel = document.querySelectorAll('.carrousel__image');

btnCarrousel[0].classList.add('active');
imageCarrousel[0].classList.add('active');

// Funcion para el cambio de (boton, imagen) del carrousel
function carrouselAction(item) {
    /**
     * Recorro las imagenes y botones para 
     * remover las clases 'active' que se agregaran
     */
    imageCarrousel.forEach((image) => {
        image.classList.remove('active');

        btnCarrousel.forEach((btn) => {
            btn.classList.remove('active');
        });
    });

    // Agregar clase 'active' a boton e imagen
    btnCarrousel[item].classList.add('active');
    imageCarrousel[item].classList.add('active');
}

// Recorro los botones
btnCarrousel.forEach((btn, i) => {
    // Evento al dar 'click' al boton en la posicion 'btn'
    btn.addEventListener('click', () => {
        // Le paso el indice 'i'
        carrouselAction(i);
    });
});




