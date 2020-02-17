
var image = document.querySelectorAll('.vl-js-image-toggle');

image.forEach(function(el){
  function toggleImage() {
    var expanded = this.getAttribute('aria-expanded') === 'true';

    this.classList.toggle('is-expanded');
    this.setAttribute('aria-expanded', !expanded);
    this.blur();
  }

  el.addEventListener('click', toggleImage);
});
