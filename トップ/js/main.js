'use strict'

const btn = document.querySelectorAll('.slider_btn');


if (window.matchMedia("(max-width: 780px)").matches) {
  btn.forEach(function (item) {
    item.onclick = function () {
      document.getElementById('main_image').src = this.dataset.image;
    }
  });
} else {
  btn.forEach(function (item, index) {
    item.onclick = function () {
      document.getElementById('main_image').src = this.dataset.image;
    }
  });

}