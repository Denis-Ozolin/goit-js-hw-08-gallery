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
  data-source = '${el.original}'></a></li>`)
  .join(''); 

galleryRef.insertAdjacentHTML('beforeend', previewGalleryRefs);
  
function onOpenModalWindow() {
  event.preventDefault();
  
  if (event.target.nodeName !== 'IMG') return;
  lightboxRef.classList.add('is-open');
  lightboxImageRef.src = event.target.dataset.source;
}   

function onCloseModalWindow() {
  if (onOpenModalWindow) {
    lightboxRef.classList.remove('is-open');
    lightboxImageRef.src = '';
  }
}

function onChangeImgToBefore() {
  if (onOpenModalWindow) {
    originalImgList.forEach((el, idx, arr) => {
      if (lightboxImageRef.src === el) {
        if (idx === 0) return;
        lightboxImageRef.src = arr[idx - 1];
      }
    })
  }
}

function onChangeImgToAfter() {
  if (onOpenModalWindow) {
    for (let i = 0; i < originalImgList.length; i += 1) {
      if (i < originalImgList.length - 1) {
        if (lightboxImageRef.src === originalImgList[i]) {
          return lightboxImageRef.src = originalImgList[i + 1];
        }
      }
    }
  }
}

galleryRef.addEventListener('click', () => {
  onOpenModalWindow(); 
});

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