import {createPhotoCard} from './render';
import {fetchCountries} from './fetch'
import cardItem from '../teamplates/Item.hbs';


export function requestValue(requestValue){
  fetchCountries(requestValue).then((res)=>{
  return res.hits;
 })
 .then(res=>{
  // console.log(res[0]);
  return cardItem(res)
 })
 .then((res)=>{
  console.log(res)
  createPhotoCard(res)
 })
}
