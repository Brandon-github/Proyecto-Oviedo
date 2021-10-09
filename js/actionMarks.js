// variables para guardar elementos del DOM
let mark = document.querySelectorAll('.mark__item');
let buttonMark = document.querySelectorAll('.mask__button');

// Variable para el manejo del desplazamiento 
let markWidthLeft = 0;
let markWidthRight = 0;

// variable para guardar el ancho de las marcas
// el ancho sera usado para el desplazamiento 
let markWidth = mark[0].clientWidth;

/**
 * Recorremos los elementos de los botones
 * de desplazamiento de las marcas R-L
 */
buttonMark.forEach((btn, i) => {
    // Evento 'click' al darle al boton
    btn.addEventListener('click', () => {
        /* 
        Validation action button
        0 == btn left 
        1 == btn right
        */

        // Validacion de boton izquierdo
        if (i == 0) {
            // Validacion el desplazamiento derecho es 0
            if (markWidthRight == 0) {
                // Validacion si el desplazamiento derecho no sobrepara el numero de elementos
                if (markWidthLeft != (markWidth * mark.length)) {
                    markWidthLeft += markWidth;
                    console.log(`L:${markWidthLeft} | R:${markWidthRight}`);
                    mark.forEach((markItem) => {
                     markItem.style.cssText = `transform: translateX(-${markWidthLeft}px)`;
                    });
                }
            } else {
                markWidthRight -= markWidth;
                mark.forEach((markItem) => {
                    markItem.style.cssText = `transform: translateX(${markWidthRight}px)`;
               });
            }
        }

        // Validacion de boton izquierdo
        if (i == 1) {
            // Validacion el desplazamiento izquierda es 0
            if (markWidthLeft == 0) {
                // Validacion si el desplazamiento derecho no sobrepara el numero de elementos
                if (markWidthRight != (markWidth * (mark.length - 2))) {
                    markWidthRight += markWidth;
                    console.log(`L:${markWidthLeft} | R:${markWidthRight}`);
                    mark.forEach((markItem) => {
                        markItem.style.cssText = `transform: translateX(${markWidthRight}px)`;
                    });
                }
            } else {
                markWidthLeft -= markWidth;
                mark.forEach((markItem) => {
                    markItem.style.cssText = `transform: translateX(-${markWidthLeft}px)`;
               });
            }
        }
    });
});

