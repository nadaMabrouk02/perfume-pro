/** @format */

let nav = document.getElementById("nav");
window.addEventListener("scroll", function () {
  nav.classList.toggle("sticky", window.scrollY > 0);
});
let bgimg = document.getElementById("bgimg");
const tl = new TimelineMax();
tl.fromTo(bgimg, 1, { height: "0%" }, { height: "80%", ease: Power2.easeInOut }).fromTo(bgimg, 1, { width: "100%" }, { width: "80%", ease: Power2.easeInOut });
let icon = document.getElementById("icon");

const fun = () => {
  if (document.documentElement.scrollTop <= 160) {
    icon.style.display = "none";
  } else {
    icon.style.display = "block";
  }
};
fun();

icon.addEventListener("click", () => {
  document.documentElement.scrollTop = 0;
});

document.addEventListener("scroll", (e) => {
  fun();
});
