import './css/styles.css';
const axios = require('axios').default;

const BASE_URL = `https://pixabay.com/api/?key=`
const API_KEY = "29932644-4e0f39fd65af4cced23d22843"
import cardItem from './teamplates/Item.hbs';

import {createPhotoCard} from './js/render';
import {fetchCountries} from './js/fetch'
import {requestValue} from './js/requestValueAnsver'
import {hendlerSubmit} from './js/hendlerSubmit'

const bodyLinc = document.querySelector('body')
const form = document.querySelector('form')
//https://pixabay.com/api/?key=29932644-4e0f39fd65af4cced23d22843&q=yellow+flowers&image_type=photo

// axios.get(`${BASE_URL}${API_KEY}&q=yellow+flowers&image_type=photo`).then(function (response) {
//     // handle success
//     console.log(response);
//   })
// (async function() {
//   const url = await ngrok.connect();
// })();


form.addEventListener('change',hendlerChange)

function hendlerChange (ev){
  console.log('change');
  const loadMoreBtn = document.querySelector('.load-more')
}

 form.addEventListener('submit',hendlerSubmit)

