const BASE_URL = `https://pixabay.com/api/?key=`
const API_KEY = "29932644-4e0f39fd65af4cced23d22843"

export function fetchCountries(requestValue){
  return fetch(`${BASE_URL}${API_KEY}&q=${requestValue}&image_type=photo&orientation=horizontal&safesearch=true&page=${'1'}&per_page=40`)
  .then(response =>{
    if (!response.ok){
      throw new Error(response.status);
    }
    // console.log(response.json())
      return response.json()
})
 }