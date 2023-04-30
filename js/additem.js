import ToastMessage from "../js/style.module.js";
ToastMessage.success("Chào bạn ");
mobiscroll.setOptions({
  theme: "ios",
  themeVariant: "light",
});

mobiscroll.select("#categories", {
  inputElement: document.getElementById("categories-input"),
});
const thumb = document.getElementById("thumb");
const poster = document.getElementById("poster");
const thumbimg = document.getElementById("thumbimg");
const posterimg = document.getElementById("posterimg");

thumb.addEventListener("change", function (e) {
  if (thumbimg.src) {
    URL.revokeObjectURL(thumbimg.src);
  }
  const file = e.target.files[0];
  const src = URL.createObjectURL(file);
  thumbimg.src = src;
  this.value = null;
});

poster.addEventListener("change", function (e) {
  if (posterimg.src) {
    URL.revokeObjectURL(posterimg.src);
  }
  const file = e.target.files[0];
  console.log(file);
  const src = URL.createObjectURL(file);
  posterimg.src = src;
  this.value = null;
});
