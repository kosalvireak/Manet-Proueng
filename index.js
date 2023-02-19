var counterContainer = document.querySelector(".website-counter");
// var resetButton = document.querySelector("#reset");
var visitCount = localStorage.getItem("page_view");

// Check if page_view entry is present
if (visitCount) {
  visitCount = Number(visitCount) + 1;
  localStorage.setItem("page_view", visitCount);
} else {
  visitCount = 1;
  localStorage.setItem("page_view", 1);
}
counterContainer.innerHTML = visitCount;

// Adding onClick event listener
// resetButton.addEventListener("click", () => {
//   visitCount = 1;
//   localStorage.setItem("page_view", 1);
//   counterContainer.innerHTML = visitCount;
// });

const nav_bar = document.querySelector("body").addEventListener("scroll", Change_back());

function Change_back() {
  // document.querySelector('.nav_bar').style.backgroundColor = 'darkorange';
}
var prevScrollpos = window.pageYOffset;
var nav = document.getElementById("navbar").style;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    nav.top = "0";
    nav.backgroundColor = " #dddddd";
  } else {
    nav.top = "-80px";
    nav.backgroundColor = " #dddddd";
  }
  prevScrollpos = currentScrollPos;
}
// This is "probably" IE9 compatible but will need some fallbacks for IE8
// - (event listeners, forEach loop)

// wait for the entire page to finish loading
window.addEventListener('load', function () {

  // setTimeout to simulate the delay from a real page load
  setTimeout(lazyLoad, 1000);

});

function lazyLoad() {
  var card_images = document.querySelectorAll('.card-image');

  // loop over each card image
  card_images.forEach(function (card_image) {
    var image_url = card_image.getAttribute('data-image-full');
    var content_image = card_image.querySelector('img');

    // change the src of the content image to load the new high res photo
    content_image.src = image_url;

    // listen for load event when the new photo is finished loading
    content_image.addEventListener('load', function () {
      // swap out the visible background image with the new fully downloaded photo
      card_image.style.backgroundImage = 'url(' + image_url + ')';
      // add a class to remove the blur filter to smoothly transition the image change
      card_image.className = card_image.className + ' is-loaded';
    });

  });

}

