let hero = '/static/images/hero-page.jpg';

let html = document.getElementsByTagName('html')[0];
let heroDiv = document.getElementsByClassName('hero-page')[0];
if (!heroDiv) {
  heroDiv = document.getElementsByClassName('hero-post')[0];
  hero = '/static/images/hero-post.jpg';
}

if (window.innerWidth <= 470) {
  hero = '/static/images/hero-mobile.jpg';
}

if (html.className.includes('webp')) {
  hero = hero.replace('.jpg', '.webp');
}

let placeholderElement = new Image();
placeholderElement.src = hero;

placeholderElement.onload = function() {
  heroDiv.setAttribute('style', `background-image: url(${hero})`);
}