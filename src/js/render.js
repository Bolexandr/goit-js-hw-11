export function createPhotoCard (el){
 const gallery = document.querySelector('.gallery');
 gallery.insertAdjacentHTML("beforeend",el)
 console.log('el=',el);
 if(el){
  const loadMoreBtn = document.querySelector('.load-more')
 loadMoreBtn.classList.remove('isHiden')
 }
}