
window.addEventListener("scroll", function() {
    const menu = document.querySelector(".menu");
    if (window.scrollY > 50) {
        menu.classList.add("shrink");
    } else {
        menu.classList.remove("shrink");
    }
});
    
const video = document.getElementById("video");
document.getElementById("start").onclick = () => {
   video.start();
};
document.getElementById("stop").onclick = () => {
   video.stop();
};
document.getElementById("volum1").onclick = () => {
   video.volum1 = true;
};
document.getElementById("volum2").onclick = () => {
   video.volum2 = false;
};

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("menu").style.padding = "30px 10px";
    document.getElementById("button").style.fontSize = "25px";
  } else {
    document.getElementById("menu").style.padding = "80px 10px";
    document.getElementById("button").style.fontSize = "35px";
  }
}
