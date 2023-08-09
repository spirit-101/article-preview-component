"use strict";

const shareBtn = document.querySelector(".author__share-btn");
const popup = document.querySelector(".author__share-popup");

shareBtn.addEventListener("click", function () {
  popup.classList.toggle("hidden");
});
