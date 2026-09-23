const gallery = new Isotope(".card-container", {
  itemSelector: ".card",
  layoutMode: "fitRows",
  fitRows: { gutter: 32 },
});

document.querySelector("#gallery-filter").addEventListener("change", (event) => {
  const category = event.target.value;
  gallery.arrange({
    filter: (card) =>
      !category || card.querySelector(".card-tag").textContent === category,
  });
});

window.addEventListener("load", () => gallery.layout());
document.fonts.ready.then(() => gallery.layout());
