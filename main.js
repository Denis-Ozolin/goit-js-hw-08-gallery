import galleryItems from "./gallery-items.js"
  
const galleryRef = document.querySelector('.js-gallery');
const lightboxRef = document.querySelector('.js-lightbox');
const lightboxImageRef = document.querySelector('img.lightbox__image');
const closeBtnRef = document.querySelector('button[data-action="close-lightbox"]');
const lightboxOverlayRef = document.querySelector('div.lightbox__overlay');

const originalImgList = galleryItems.map(el => el.original);

const previewGalleryRefs = galleryItems.map(el => 
  `<li class = 'gallery__item'><a class = 'gallery__link' href = '${el.original}'><img src = '${el.preview}' 
  alt = '${el.description}' class = 'gallery__image' 
  data-link = '${el.original}'></a></li>`)
  .join(''); 

galleryRef.insertAdjacentHTML('beforeend', previewGalleryRefs);
  
function onOpenModalWindow() {
  event.preventDefault();
  
  if (event.target.nodeName !== 'IMG') return;
  lightboxRef.classList.add('is-open');

  lightboxImageRef.src = event.target.dataset.link;
}   

function onCloseModalWindow() {
  lightboxRef.classList.remove('is-open');
  lightboxImageRef.src = '';
}

function onChangeImgToBefore() {
  originalImgList.forEach((el, inx, arr) => {
    if (lightboxImageRef.src === el) {
      if (inx === 0) return;
        lightboxImageRef.src = arr[inx - 1];
    }
  })
}

function onChangeImgToAfter() {
    originalImgList.forEach((el, inx, arr) => {
      if (lightboxImageRef.src === el) {
        if (inx === arr.length - 1) return;
        lightboxImageRef.src = arr[inx + 1];
    }
  })
}

galleryRef.addEventListener('click', (event => {
  onOpenModalWindow();
}));

closeBtnRef.addEventListener('click', () => {
  onCloseModalWindow();
})

lightboxOverlayRef.addEventListener('click', () => {
  onCloseModalWindow();
})

window.addEventListener('keydown', event => {
  if (event.code === 'Escape') {
    onCloseModalWindow();
  };

  if (event.code === 'ArrowLeft') {
    onChangeImgToBefore();
  }

  if (event.code === 'ArrowRight') {
    onChangeImgToAfter();
  }

});