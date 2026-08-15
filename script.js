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
  ".image-container-resident"
);

cards.forEach(function (card) {

  const iframe = card.querySelector(".card-iframe");

  card.addEventListener("mouseenter", function () {

    if (!iframe.src) {
      iframe.src = iframe.dataset.src;
    }

  });

});