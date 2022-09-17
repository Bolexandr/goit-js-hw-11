/////////////////рендиирить нові елементи на сторінку InaerAgastment - beforeEnd
///////////////// при успішному рендері забирає візуалі хіден з кнопки лоадМорр

export function createPhotoCard(el) {
  const gallery = document.querySelector('.gallery');

  gallery.insertAdjacentHTML('beforeend', el);
  //  console.log('el=',el);
}
