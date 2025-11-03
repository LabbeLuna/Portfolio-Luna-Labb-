// Bouton retour en haut
const btn = document.getElementById('backToTop');

window.onscroll = function() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

btn.onclick = function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
