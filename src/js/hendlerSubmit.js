import {requestValue} from './requestValueAnsver'

export function hendlerSubmit (ev){
  ev.preventDefault()

  const galery = document.querySelector('.gallery')
  galery.innerHTML=''

  const loadMoreBtn = document.querySelector('.load-more')
  loadMoreBtn.classList.add('isHiden')

  const inputValue = document.querySelector('form')[0].value
  requestValue(inputValue)
  
  

 }