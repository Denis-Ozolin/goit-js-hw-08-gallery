import galleryItems from "./gallery-items.js"
  
const galleryRef = document.querySelector('.js-gallery');
const lightboxRef = document.querySelector('.js-lightbox');
const lightboxImageRef = document.querySelector('img.lightbox__image');
const closeBtnRef = document.querySelector('button[data-action="close-lightbox"]');
const lightboxOverlayRef = document.querySelector('div.lightbox__overlay');

const previewGalleryRefs = galleryItems.map(el => 
  `<li class = 'gallery__item'><img src = '${el.preview}' 
  alt = '${el.description}' class = 'gallery__image' 
  data-link = '${el.original}'></li>`)
  .join('');   

galleryRef.insertAdjacentHTML('beforeend', previewGalleryRefs);

galleryRef.addEventListener('click', (event => {
  event.preventDefault();

  lightboxRef.classList.add('is-open');
  lightboxImageRef.src = event.target.dataset.link;


  if (event.target.nodeName !== 'IMG') return;
  lightboxImageRef.src = event.target.dataset.link;
}));

closeBtnRef.addEventListener('click', () => {
  lightboxRef.classList.remove('is-open');
  lightboxImageRef.src = '';
})

lightboxOverlayRef.addEventListener('click', () => {
  lightboxRef.classList.remove('is-open');
  lightboxImageRef.src = '';
})

window.addEventListener('keydown', event => {
  if (event.code === 'Escape') {
    lightboxRef.classList.remove('is-open');
    lightboxImageRef.src = '';
  };

  // if (event.code === 'ArrowLeft') {
  //   lightboxRef.src = lightboxRef.previousElementSibling
  //     .firstElementChild.dataset.link;
  // }

  //  if (event.code === 'ArrowRight') {
  //   lightboxRef.src = lightboxRef.nextElementSibling
  //     .firstElementChild.dataset.link;
  // }

});
   

