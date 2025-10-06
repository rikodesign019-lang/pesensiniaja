document.addEventListener('DOMContentLoaded', function() {
  const hero = document.querySelector('.hero');
  hero.style.opacity = 0;
  setTimeout(() => {
    hero.style.transition = 'opacity 2s ease';
    hero.style.opacity = 1;
  }, 300);
});