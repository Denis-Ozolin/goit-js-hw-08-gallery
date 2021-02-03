import galleryItems from "./gallery-items.js"


const xxx = [  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },]
const galleryRef = document.querySelector('.js-gallery');

const previewGalleryRefs = xxx.map(el => {
    `<li><img src = '${el.preview} alt = '${el.description}'></li>`;
}).join('');


console.log(previewGalleryRefs);

galleryRef.insertAdjacentHTML('beforeend', previewGalleryRefs);