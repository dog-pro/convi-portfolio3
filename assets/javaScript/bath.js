"use strict"

// 今回やるのはタブメニューです。
// navの小要素であるliをクリックして、contents内の小要素であるli要素を表示させる。
// .index() 要素のindexを取得します。
// .eq() 引数に応じたindexの要素を指定します。
// .addClass() クラスを追加します。
// .removeClass() クラスを削除します。

$('.p-bath__select li').on("click",function(){

  let contentsList = $(".p-bathList");

  let indexList = $(".p-bath__select li").index(this);

  contentsList.addClass('is-hidden');
  contentsList.eq(indexList).removeClass('is-hidden');
});
