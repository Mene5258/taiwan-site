'use strict'

// ローディング用js

// 4秒後にfigure要素にクラスloadedを追加する
const taiwan_logo = function () {
  const taiwan_logo = document.getElementById('loading');
  taiwan_logo.classList.add('loaded');
}
setTimeout(taiwan_logo, 4000);

// ローディング用jsここまで