function toggle() {
  document.querySelector('button.hamburger').classList.toggle('is-active');
  document.querySelector('nav').classList.toggle('open');
}
document.querySelector('button.hamburger').addEventListener('click', () => toggle());
document.querySelectorAll('nav>a').forEach((a) => a.addEventListener('click', () => toggle()));
document.querySelector('#share>button').addEventListener('click', (e) => window.open('https://www.facebook.com/sharer/sharer.php?u=' + document.querySelector('#share>img').src));
