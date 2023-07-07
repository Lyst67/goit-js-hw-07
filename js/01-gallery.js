import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryList = document.querySelector(".gallery");

const galleryItemsMarkup = createGalleryItemsMarkup(galleryItems);
galleryList.insertAdjacentHTML("beforeend", galleryItemsMarkup);

galleryList.addEventListener("click", onGallaryImgClick);

const instance = basicLightbox.create(`
    <div class="modal">
      <img class="big-image" src="" alt="">
    </div>
`);

function onGallaryImgClick(event) {
  event.preventDefault();
  const urlOfBigImage = event.target.dataset.source;
  const descrOfBigImage = event.target.getAttribute("alt");
  if (event.target.tagName === "IMG") {
    instance.show();
    const bigImg = document.querySelector(".big-image");
    bigImg.src = urlOfBigImage;
    bigImg.alt = descrOfBigImage;
  }
  document.addEventListener("keyup", onModalClose);
  function onModalClose(event) {
    if (event.code === "Escape") {
      instance.close();
      document.removeEventListener("keyup", onModalClose);
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
