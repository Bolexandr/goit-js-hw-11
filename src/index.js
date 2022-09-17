import './css/styles.css';
const axios = require('axios').default;

const BASE_URL = `https://pixabay.com/api/?key=`;
const API_KEY = '29932644-4e0f39fd65af4cced23d22843';
// import SimpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';

import { aysynk } from './js/fetch';
export let pageCount = null;

const bodyLinc = document.querySelector('body');
const form = document.querySelector('form');
const loadMoreBtn = document.querySelector('.load-more');
const gallery = document.querySelector('.gallery');

////////////////////////////////////////////////////////////////////////////////
form.addEventListener('change', hendlerChange);

function hendlerChange(ev) {
  form.addEventListener('submit', hendlerSubmit);

  console.log('change');
}
/////////////////////////////////////////////////////////////////////////////////
form.addEventListener('submit', E => {
  E.preventDefault();
}); //prevent deafault killer

form.addEventListener('submit', hendlerSubmit);

function hendlerSubmit(ev) {
  loadMoreBtn.classList.add('isHiden');
  gallery.innerHTML = '';
  pageCount = 1;
  const inputValue = document.querySelector('form')[0].value;

  aysynk(inputValue, pageCount, ev);

  form.removeEventListener('submit', hendlerSubmit);
}

loadMoreBtn.addEventListener('click', ev => {
  console.log(document.firstElementChild.getBoundingClientRect());
  const { height: cardHeight } = document;
  document.querySelector('.gallery');
  document.firstElementChild.getBoundingClientRect();

  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });

  const inputValue = document.querySelector('form')[0].value;
  pageCount += 1;
  aysynk(inputValue, pageCount, ev);
});
