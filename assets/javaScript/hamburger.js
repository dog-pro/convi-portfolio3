// PC 空室確認・ご予約ボタン→ハンバーガー開閉
$(function(){
  $('.c-humburger__button').click(function(){
    $('.p-hamburgerPC').toggleClass('add');
  });
});

// $(function(){
//   $('.c-humburger__button').click(function(){
//     $('.p-hamburgerPC').toggleClass('add');
//     setTimeout(function() {
//       $('.p-hamburgerPC').removeClass('add');
//     }, 600); 
//     // .add クラスのアニメーション時間に合わせて待機する
//   });
// });



//　　　　　両方　　.c-humburger__button
// 空室確認ボタン　.p-vacant
// 　　　　　　　×　.p-hamburgerPC__close

// ハンバーガーメニュー
// $(".c-humburger__button, p-hamburgerPC__close").on('click',() => {
//   let trg = $(".c-humburger__button");
//   if(!$(".p-hamburgerPC").is(':animated')){
//       trg.toggleClass('add');
//       $('.l-sidemenu__back').toggleClass('open');
//   }
//   return false;
// });


// ハンバーガー内　kids
$(function(){
  $('.slide').click(function(){
    $('.p-hamburgerPC__kidsList').slideToggle(600);
  });
});

// SP icon入れ替え
$(function(){
  $('.p-humburgerSPbutton__img').click(function(){
    // $(this).slideToggle(600);
    $('.p-humburgerSP__close').slideToggle(600);
    // $('.p-humburgerSP').toggleClass(600);
  });
  $('.p-humburgerSP__close').click(function(){
    // $(this).slideToggle(600);
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