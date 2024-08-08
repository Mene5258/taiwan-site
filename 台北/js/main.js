'use strict';
// モーダル1
const dialog = document.getElementById('md_1');
const openbtn = document.getElementById('mordal_1');
openbtn.onclick = function () {
  dialog.show();
};
const closebtn = document.getElementById('closebtn');
closebtn.onclick = function () {
  dialog.close();
};

// モーダル2
const dialog2 = document.querySelector('.md_2');
const openbtn2 = document.querySelector('.mordal_2');
openbtn2.onclick = function () {
  dialog2.show('.mordal2');
};
const closebtn = document.getElementById('closebtn');
closebtn.onclick = function () {
  dialog.close();
};
// モーダル3



// モーダル4