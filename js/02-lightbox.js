import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = {
  container: document.querySelector(".gallery"),
};

function addMarckup() {
  const listItems = galleryItems
    .map(
      (element) =>
        `<li><a class="gallery__link" href=${element.original}>
          <img
            class="gallery__image"
            src=${element.preview}
            data-source=${element.original}
            alt=${element.description}
            width=340
          />
        </a></li>`
    )
    .join("");

  gallery.container.insertAdjacentHTML("afterbegin", listItems);
}
addMarckup();

var lightbox = new SimpleLightbox(".gallery a", {
  captionSelector: "img",
  captionType: "attr",
  captionsData: "alt",
  captionDelay: 250,
});
