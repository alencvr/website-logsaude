let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function() {
  nextImage();
}, 5100)

function nextImage(){
  count++
  if(count>3){
    count=1;
  }

  document.getElementById("radio"+count).checked = true;

}

document.addEventListener('DOMContentLoaded', init);

function init() {
  let query = window.matchMedia("(min-width: 610px)");

  if(query.matches) {
    document.getElementById("product-banner1").src="./images/banner1.jpg"
    document.getElementById("product-banner2").src="./images/banner2.jpg"
    document.getElementById("product-banner3").src="./images/banner3.jpg"
  } else {
    document.getElementById("product-banner1").src="./images/banner1-mobile.jpg"
    document.getElementById("product-banner2").src="./images/banner2-mobile.jpg"
    document.getElementById("product-banner3").src="./images/banner3-mobile.jpg"
  }
}