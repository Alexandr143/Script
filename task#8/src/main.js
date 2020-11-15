'use strict';

import gallery from "./gallery-items.js";

const KEYCODE_ESC = 27;

const refs ={
    list: document.querySelector('.js-gallery'),
    divLightbox: document.querySelector('.js-lightbox'),
    divLightbox__overlay: document. querySelector('.js-lightbox__overlay'),
    divLightbox__content: document.querySelector('.js-lightbox__content'),
    buttonLightbox__button: document.querySelector('.js-lightbox__button'),
};

const galleryView = gallery => 

{return gallery.map(({preview, original, description}) => {
    const localRefs ={
        item: document.createElement('li'),
        link: document.createElement('a'),
        image:  document.createElement('img'),
    };

    localRefs.item.classList.add("gallery__item");
    localRefs.link.classList.add("gallery__link");
    localRefs.link.setAttribute("href", original);
    localRefs.image.classList.add("gallery__image");
    localRefs.image.setAttribute("src", preview);
    localRefs.image.setAttribute("data-source", original);
    localRefs.image.setAttribute("alt", description);
    localRefs.link.appendChild(localRefs.image);
    localRefs.item.appendChild(localRefs.link);

    return localRefs.item;
}); 
};

const items = galleryView(gallery);
items.forEach(item => {
    refs.list.appendChild(item);
});
