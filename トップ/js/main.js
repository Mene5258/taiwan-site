'use strict';

const btn = document.querySelectorAll('.slider_btn');

const prebtn = document.getElementById('pre_btn');
const nextbtn = document.getElementById('next');
const contents = document.querySelector('.contents');
const btn1 = document.getElementById('sl1');
const btn2 = document.getElementById('sl2');
const btn3 = document.getElementById('sl3');
const btn4 = document.getElementById('sl4');
const btn5 = document.getElementById('sl5');



function premove() {
  if (contents.classList.contains('contents1') === true) {
    contents.classList.remove('contents1');
    contents.classList.add('contents5');
    btn5.checked = true;
  } else if (contents.classList.contains('contents2') === true) {
    contents.classList.remove('contents2');
    contents.classList.add('contents1');
    btn1.checked = true;

  } else if (contents.classList.contains('contents3') === true) {
    contents.classList.remove('contents3');
    contents.classList.add('contents2');
    btn2.checked = true;

  } else if (contents.classList.contains('contents4') === true) {
    contents.classList.remove('contents4');
    contents.classList.add('contents3');
    btn3.checked = true;

  } else {
    contents.classList.remove('contents5');
    contents.classList.add('contents4');
    btn4.checked = true;

  }
}

function nextmove() {
  if (contents.classList.contains('contents1') === true) {
    contents.classList.remove('contents1');
    contents.classList.add('contents2');
    btn2.checked = true;

  } else if (contents.classList.contains('contents2') === true) {
    contents.classList.remove('contents2');
    contents.classList.add('contents3');
    btn3.checked = true;

  } else if (contents.classList.contains('contents3') === true) {
    contents.classList.remove('contents3');
    contents.classList.add('contents4');
    btn4.checked = true;

  } else if (contents.classList.contains('contents4') === true) {
    contents.classList.remove('contents4');
    contents.classList.add('contents5');
    btn5.checked = true;

  } else {
    contents.classList.remove('contents5');
    contents.classList.add('contents1');
    btn1.checked = true;
  }
}

if (window.matchMedia("(max-width: 768px)").matches) {
  btn.forEach(function (item) {
    item.onclick = function () {
      document.getElementById('main_image').src = this.dataset.image;

    }
  });
} else {
  prebtn.addEventListener('click', premove);
  nextbtn.addEventListener('click', nextmove);

  btn.forEach(function (item) {
    item.onclick = function () {

    }
  });

}

// 画像をクリックしたら、各ページに飛ぶ
const jump = document.querySelectorAll('.mini_name');
jump.forEach(function (item) {
  item.onclick = function () {
    location.href = this.dataset.href;
  }
});