// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Change code below this line

const galleryList = document.querySelector('.gallery');

const markUp = galleryItems
  .map(({ preview, original, description }) => {
    return `
    <li class="gallery__item">
        <a class="gallery__link" href=${original}>
            <img class="gallery__image"
            src=${preview}
            alt=${description} />
        </a>
    </li>`;
  })
  .join('');

galleryList.insertAdjacentHTML('afterbegin', markUp);

new SimpleLightbox('.gallery__link', {
  captions: true,
  captionType: 'attr',
  captionsData: `alt`,
  captionDelay: 250,
});
