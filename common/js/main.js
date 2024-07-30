'use strict'

// ドロワーメニュー開いたときにロゴ表示
const logo2 = () {
  const logo2 = document.getElementById('open_logo');
  logo2.onclick(logo2);
}


// ローディング用js

// 4秒後にfigure要素にクラスloadedを追加する
const taiwan_logo = function () {
  const taiwan_logo = document.getElementById('loading');
  taiwan_logo.classList.add('loaded');
}
setTimeout(taiwan_logo, 4000);

// ローディング用jsここまで