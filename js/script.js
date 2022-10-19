let time = 2000,
  currentImageIndex = 0,
  images = document.querySelectorAll("#slider img")
  max = images.length;

function nextImage() {
  currentImageIndex++

  console.log(currentImageIndex)

  images[currentImageIndex].classList.add("selected")
}

function start() {
  setInterval(() => {
    nextImage
  }, time)
}


window.addEventListener("load", start)