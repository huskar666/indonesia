const photosContainer = document.querySelector('.explore__photos');
const photos = photosContainer.querySelectorAll('.explore__photos--photo');
let currentPhotoIndex = 0;

function nextPhoto() {
  currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
  photosContainer.style.transform = `translateX(-${currentPhotoIndex * 100}%)`;
}

function prevPhoto() {
  currentPhotoIndex = (currentPhotoIndex - 1 + photos.length) % photos.length;
  photosContainer.style.transform = `translateX(-${currentPhotoIndex * 100}%)`;
}

document.querySelector('.next-button').addEventListener('click', nextPhoto);
document.querySelector('.prev-button').addEventListener('click', prevPhoto);

photosContainer.style.transform = `translateX(0)`;

setInterval(nextPhoto, 5000);