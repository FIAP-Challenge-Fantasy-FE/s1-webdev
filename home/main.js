window.onscroll = function() {
  const header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);
};