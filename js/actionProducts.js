let card = document.querySelectorAll('.card--destac');
let buttonProduct = document.querySelectorAll('.desc__button');

let productWidthLeft = 0;
let productWidthRight = 0;

let cardWidth = card[0].clientWidth;

buttonProduct.forEach((btn, i) => {
    
    btn.addEventListener('click', () => {

        if (i == 0) {

            if (productWidthRight == 0) {

                if (productWidthLeft != (cardWidth * card.length)) {
                    productWidthLeft += cardWidth;

                    card.forEach((cardItem) => {
                        cardItem.style.cssText = `transform: translateX(-${productWidthLeft}px)`;
                    });
                }
            } else {
                productWidthRight -= cardWidth;
                
                card.forEach((cardItem) => {
                    cardItem.style.cssText = `transform: translateX(${productWidthRight}px)`;
                });
            }
        }

        if (i == 1) {

            if (productWidthLeft == 0) {

                if (productWidthRight != (cardWidth * (card.length - 2))) {
                    productWidthRight += cardWidth;

                    card.forEach((cardItem) => {
                        cardItem.style.cssText = `transform: translateX(${productWidthRight}px)`;
                    });
                }
            } else {
                productWidthLeft -= cardWidth;

                card.forEach((cardItem) => {
                    cardItem.style.cssText = `transform: translateX(-${productWidthLeft}px)`;
                });
            }
        }
    });
});