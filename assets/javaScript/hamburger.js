// PC 空室確認・ご予約ボタン→ハンバーガー開閉
$(function(){
  $('.c-humburger__button').click(function(){
    $('.p-hamburgerPC').toggleClass('add');
  });
});

// ハンバーガー内　kids
$(function(){
  $('.slide').click(function(){
    $('.p-hamburgerPC__kidsList').slideToggle(600);
  });
});

// SP icon入れ替え
$(function(){
  $('.p-humburgerSPbutton__img').click(function(){
    $('.p-humburgerSP__close').slideToggle(600);
  });
  $('.p-humburgerSP__close').click(function(){
    $('.p-humburgerSP__img').slideToggle(600);
  });
});

// SP ハンバーガーメニュー開閉
$(function(){
  $('.p-humburgerSPbutton').click(function(){
    // hambueger開いているとき背景固定
    // bodyにmodal-openクラスをトグル
    $('body').toggleClass('modal-open'); 
    $('.p-humburgerSP').slideToggle(".close" , 0);
  });
});