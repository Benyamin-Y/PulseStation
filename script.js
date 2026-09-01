const cards = document.querySelectorAll(
  ".image-container-games, " +
  ".image-container-laufey, " +
  ".image-container-wolverine, " +
  ".image-container-silent-hill, " +
  ".image-container-phantom-blade, " +
  ".image-container-ragnarok, " +
  ".image-container-sp2, " +
  ".image-container-hogwarts, " +
  ".image-container-mortal11, " +
  ".image-container-lego, " +
  ".image-container-ghost-of-yotei, " +
  ".image-container-ghost-of-tsushima, " +
  ".image-container-assassin, " +
  ".image-container-resident,"
    +
    ".image-container-gow"
);

cards.forEach(function (card) {

  const iframe = card.querySelector(".card-iframe");

  card.addEventListener("mouseenter", function () {

    if (!iframe.src) {
      iframe.src = iframe.dataset.src;
    }

  });

});



const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
  document.body.classList.add('light-mode');
}

const themeToggles = document.querySelectorAll('#theme-toggle, #theme-toggle-desktop');
themeToggles.forEach(function(btn){
  btn.addEventListener('click', function() {
    document.body.classList.toggle('light-mode');
    localStorage.setItem('theme', document.body.classList.contains('light-mode') ? 'light' : 'dark');
  });
});
