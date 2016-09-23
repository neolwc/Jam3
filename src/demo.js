let images = ["http://www.jam3.com/wp-content/uploads/2015/07/02_haluk-720x408.jpg", "http://www.jam3.com/wp-content/uploads/2016/02/vikings-featured-03-720x408.jpg", "http://www.jam3.com/wp-content/uploads/2014/07/SevenSins-Feature-Image-720x408.jpg", "http://www.jam3.com/wp-content/uploads/2014/03/Bear71-Feature-Image-720x408.jpg", "http://www.jam3.com/wp-content/uploads/2014/03/WhiteDoves-Feature-Image1-720x408.jpg", "http://www.jam3.com/wp-content/uploads/2014/03/Norton-Feature-Image-720x408.jpg", "http://www.jam3.com/wp-content/uploads/2015/09/feature-image-tiff1-720x408.jpg", "http://www.jam3.com/wp-content/uploads/2014/03/CountryDeep-Feature-Image-720x408.jpg", "http://www.jam3.com/wp-content/uploads/2014/03/Toyota-Feature-Image-B-720x408.jpg", "http://www.jam3.com/wp-content/uploads/2014/03/Defector-Feature-Image-720x408.jpg", "http://www.jam3.com/wp-content/uploads/2014/03/Skittles-Feature-Image-720x408.jpg", "http://www.jam3.com/wp-content/uploads/2014/03/Waterlife-Feature-Image-720x408.jpg"];
document.querySelectorAll('.box[data-current="1"] img').forEach((img, n) => img.src = images[n]);
function toggle() {
  document.querySelector('button.hamburger').classList.toggle('is-active');
  document.querySelector('nav').classList.toggle('open');
}
document.querySelector('button.hamburger').addEventListener('click', () => toggle());
document.querySelectorAll('nav>a').forEach((a) => a.addEventListener('click', () => toggle()));
document.querySelector('#share>button').addEventListener('click', (e) => window.open('https://www.facebook.com/sharer/sharer.php?u=' + document.querySelector('#share>img').src));
function slide(next) {
  let current = document.querySelector('.box[data-current="1"]');
  let coming = document.querySelector('.box[data-current="0"]');
  let currentImages = [];
  current.querySelectorAll('img').forEach((img) => currentImages.push(images.indexOf(img.src)));
  coming.querySelectorAll('img').forEach((img, i) => {
    let n = currentImages[i];
    if (!next) n = (n - 3) < 0 ? images.length + n - 3 : n - 3;
    else n = (n + 3) >= images.length ? n + 3 - images.length : n + 3;
    img.src = images[n];
  });
  if (current.classList.length > 1) current.classList = ['box'];
  if (coming.classList.length > 1) coming.classList = ['box'];
  current.classList.add(next ? 'fadeOutLeft' : 'fadeOutRight');
  coming.classList.add(next? 'fadeInRight' : 'fadeInLeft');
  current.dataset.current = 0;
  coming.dataset.current = 1;
}
document.querySelector('.right').addEventListener('click', slide.bind(this, true));
document.querySelector('.left').addEventListener('click', slide.bind(this, false));
