////////////////// робить фетч запит і перевіряє чи щось вернулось  щоб викинути червоний алертconst BASE_URL = `https://pixabay.com/api/?key=`

const API_KEY = '29932644-4e0f39fd65af4cced23d22843';
const BASE_URL = `https://pixabay.com/api/?key=`;
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { createPhotoCard } from './render';
import cardItem from '../teamplates/Item.hbs';
const axios = require('axios').default;
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const lightbox = new SimpleLightbox('.photo-card_linc', {
  captionsData: 'alt',
  captionDelay: 250,
  navText: ['<', '>'],
});

export async function aysynk(inputValue, numberOfPage, event) {
  const response = axios.get(
    `${BASE_URL}${API_KEY}&q=${inputValue}&image_type=photo&orientation=horizontal&safesearch=true&page=${numberOfPage}&per_page=40`
  );

  // console.log(response);

  const res = await response;

  // console.log(res);

  const data = res.data.hits;

  if (data.length > 0) {
    document.querySelector('.load-more').classList.remove('isHiden');
  }
  if (event.target.innerText === ' Search' && data.length !== 0) {
    Notify.success(`Hooray! We found ${res.data.totalHits} images.`);
  }
  if (data.length === 0) {
    Notify.failure(
      'Sorry, there are no images matching your search query. Please try again.'
    );
  } else if (data.length <= 39) {
    document.querySelector('.load-more').classList.add('isHiden');
    if (event.target.innerText === 'Load more')
      Notify.failure(
        "We're sorry, but you've reached the end of search results."
      );
  }

  // console.log(data);
  createPhotoCard(cardItem(data));
  lightbox.refresh();
}
