import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = {
  container: document.querySelector(".gallery"),
};

gallery.container.addEventListener("click", selectImg);

function addMarckup() {
  const listItems = galleryItems
    .map(
      (element) =>
        `<a class="gallery__link" href=${element.original}>
        <img
          class="gallery__image"
          src=${element.preview}
          data-source=${element.original}
          alt=${element.description}
          width=340
        />
      </a>`
    )
    .join("");

  gallery.container.insertAdjacentHTML("afterbegin", listItems);
}
addMarckup();

function selectImg(evt) {
  evt.preventDefault();

  if (evt.target.classList.contains("gallery__image")) {
    evt.target.src = evt.target.dataset.source;

    const instance = basicLightbox.create(`
    <img src=${evt.target.src} alt=${evt.target.alt} width=1280>
`);
    instance.show();
    console.log("click");
  } else {
    return;
  }

  document.addEventListener("keydown", escEvt);

  function escEvt(evt) {
    const modalEl = document.querySelector(".basicLightbox");
    evt.preventDefault();
    if (evt.keyCode == 27 && modalEl != null) {
      modalEl.remove();
      console.log("Esc");
    }
    document.removeEventListener("keydown", escEvt);
  }
}
