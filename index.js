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
    nav.backgroundColor = " dddddd";
  } else {
    nav.top = "-50px";
    nav.backgroundColor = " dddddd";
  }
  prevScrollpos = currentScrollPos;
}