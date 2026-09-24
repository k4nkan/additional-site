const menu = document.querySelector("#menu");
const menuButton = document.querySelector(".menu-button");

menuButton.addEventListener("click", () => menu.showModal());
menu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => menu.close());
});
window
  .matchMedia("(max-width: 48rem)")
  .addEventListener("change", () => menu.close());

const gallery = new Isotope(".card-container", {
  itemSelector: ".card",
  layoutMode: "fitRows",
  fitRows: { gutter: 32 },
});

document
  .querySelector("#gallery-filter")
  .addEventListener("change", (event) => {
    const category = event.target.value;
    gallery.arrange({
      filter: (card) =>
        !category || card.querySelector(".card-tag").textContent === category,
    });
  });

window.addEventListener("load", () => gallery.layout());
document.fonts.ready.then(() => gallery.layout());
