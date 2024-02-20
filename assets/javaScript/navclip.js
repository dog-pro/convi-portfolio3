// // 配列に各要素を格納して発火
// $(function(){
//   $('.p-mainScroll').addClass('active');
//   var targets = (".p-information");
//   var flags = [true];


//     $(window).on('load scroll', function() {
//     //スクロール量を取得
//     var scroll = $(window).scrollTop();
//     //ウィンドウの高さを取得
//     var height = $(window).height();
//     // -96はpadding分
//     var minusPadding = scroll + height - 96;

//     targets.forEach(function(target, index) {
//       // foreachで各要素ごとに
//       // 引数内にあるindexは
//       //1,$(this)は各クラス(.p-information、.p-serviceなど)
//       //2,.offset()で1,のクラスの位置を取得する
//       //3,.top     で2,要素の一番上を指定
//       var targetPosition = $(target).offset().top;
//       //ターゲット(特定の場所)までスクロールすると
//       if (minusPadding > targetPosition && flags[index]) {
//         // console.log("ふわっと出現");

// 				//activeクラスを付与してフェードインする
// 				$(target).addClass('active');
//         // 1回出現したら止める
//         // flags[index] = false;
//       }
//     });
//   });
// });

// $(function () {
//   // スクロールを開始したら
//   $(window).on("scroll", function () {
//     // ファーストビューの高さを取得
//     mvHeight = $(".p-information").height().top;
//     if ($(window).scrollTop() > mvHeight) {
//       // スクロールの位置がファーストビューより下の場合にclassを付与
//       $(".p-navTop").addClass(".active");
//     } else {
//       // スクロールの位置がファーストビューより上の場合にclassを外す
//       $(".p-navTop").removeClass(".active");
//     }
//   });
// });


//YouTube　きど「【jQuery】スクロールしたら要素がふわっと表示されるアニメーションの作り方！」参照

// $(function () {
//   $(window).scroll(function(){
//     $('.fadein').each(function(){ 
//       // ('.fadein')クラスと書かれた場所に対して.eachそれぞれに実行
//       let targetElement = $(this).offset().top;
//       // .offset クラスの位置を取得
//       // .top    クラスの一番上を取得
//       let scroll = $(window).scrollTop();
//       // .scrollTop スクロール量を取得
//       let windowHeight = $(window).height();
//       // .height ウィンドウの高さを取得
//       if(scroll > targetElement - windowHeight + 150){
//         // +150 要素がほんの少しでも見えた瞬間に発火してしまうと早すぎるので+150している
//         $(this).addClass('scrollin');
//       }
//     })
//   })
// });

//下記参照
//https://newsite-make.com/scroll-header-fadein/
$(function(){

  $(window).on("scroll",function(){
    // SP
    const header = $(".p-navSP__top");
    const bottom = $(".p-footer__fixed");

    // PC
    const navTop = $(".p-navTop__cover");
    const navBottom = $(".p-nav__bottom");

    //ターゲットの位置を取得
    let targetTop = $(".p-information").offset().top;
      // .offset クラスの位置を取得
      // .top    クラスの一番上を取得

    let scroll = $(window).scrollTop();
    //.scrollTop スクロール量を取得
    let windowHeight = $(window).height();
    // .height ウィンドウの高さを取得
    
    // -40はpadding分
    // let minusPadding = scroll + height - 40;
    // let height = scroll + windowHeight - 96

    if(scroll > targetTop - windowHeight + 800){
      // SP
      header.addClass("fadeinTop");
      bottom.addClass('fadeinFooter');
      // PC
      navTop.addClass("fadeinTop__pc");
      navBottom.addClass("fadeinBottom__pc");

    }else{
      // SP
      header.removeClass("fadeinTop");
      bottom.removeClass('fadeinFooter');
      // PC
      navTop.removeClass("fadeinTop__pc");
      navBottom.removeClass("fadeinBottom__pc");

    }
  });
});