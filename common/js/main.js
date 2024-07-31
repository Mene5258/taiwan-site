'use strict'
// ドロワーメニュー開閉時
document.addEventListener('DOMContentLoaded', function () {
  const menuButton = document.querySelector('.gMenu');
  const closeButton = document.getElementById('close-button');
  const drawerMenu = document.querySelector('.gMenu');
  const logo = document.querySelector('.header_logo');

  menuButton.addEventListener('click', function () {
    drawerMenu.classList.add('open');
    logo.classList.remove('hidden');
  });

  closeButton.addEventListener('click', function () {
    drawerMenu.classList.remove('open');
    logo.classList.add('hidden');
  });
});



// ローディング用js

// 4秒後にfigure要素にクラスloadedを追加する
const taiwan_logo = function () {
  const taiwan_logo = document.getElementById('loading');
  taiwan_logo.classList.add('loaded');
}
setTimeout(taiwan_logo, 4000);

// ローディング用jsここまで