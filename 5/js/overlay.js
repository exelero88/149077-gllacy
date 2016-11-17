var link = document.querySelector(".index-map__btn");
var popup = document.querySelector(".feedback");
var close = popup.querySelector(".feedback__closed");
var overlay = document.querySelector(".overlay");

link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("feedback-show-js");
    overlay.classList.add("overlay-js");
});

close.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("feedback-show-js");
    overlay.classList.remove("overlay-js");
})

overlay.addEventListener("click", function(event) {
    event.preventDefault();
    overlay.classList.remove("overlay-js");
    popup.classList.remove("feedback-show-js");
})
