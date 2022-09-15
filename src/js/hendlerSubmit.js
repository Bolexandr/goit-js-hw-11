import {requestValue} from './requestValueAnsver'

export function hendlerSubmit (ev){
  ev.preventDefault()
  const inputValue = document.querySelector('form')[0].value
  requestValue(inputValue)
 }