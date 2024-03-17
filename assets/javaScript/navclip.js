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
    let scroll = $(window).scrollTop();
    let windowHeight = $(window).height();

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