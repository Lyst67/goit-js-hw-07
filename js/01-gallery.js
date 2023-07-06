import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryList = document.querySelector(".gallery");

const galleryItemsMarkup = createGalleryItemsMarkup(galleryItems);
galleryList.insertAdjacentHTML("beforeend", galleryItemsMarkup);

galleryList.addEventListener("click", onGallaryImgClick);

const instance = basicLightbox.create(`
    <div class="modal">
      <img class="big-image" src="">
        <p class="img-title"></p>
    </div>
`);

function onGallaryImgClick(event) {
  event.preventDefault();
  if (event.target.tagName === "IMG") {
    instance.show();
    const dataSourceImg = event.target.dataset.source;
    const bigImg = document.querySelector(".big-image");
    bigImg.src = dataSourceImg;
  }
  document.addEventListener("keyup", onModalClose);
  function onModalClose(event) {
    if (event.code === "Escape") {
      instance.close();
    }
  }
}

function createGalleryItemsMarkup(items) {
  return items
    .map(
      ({ original, preview, description }) => `
  <li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
     </a>
  </li>
    `
    )
    .join("");
}

console.log(galleryItems);
