// const languageTop = document.querySelector('.p-language__top');
// const languageCover = document.querySelector('.p-language__cover');

// let isHovered = false;

// languageTop.addEventListener('mouseover', () => {
//   isHovered = true;
//   languageCover.style.opacity = 1;
// });

// languageTop.addEventListener('mouseout', () => {
//   isHovered = false;
//   setTimeout(() => {
//     if (!isHovered) {
//       languageCover.style.opacity = 0;
//     }
//   }, 100);
// });

// languageCover.addEventListener('mouseover', () => {
//   isHovered = true;
// });

// languageCover.addEventListener('mouseout', () => {
//   isHovered = false;
//   languageCover.style.opacity = 0;
// });

// toggle
// $(() => {
//   $(".p-language__top").hover(function(){
//     $(this).children(".p-language__cover").stop().slideToggle();
//   });
// });

// $(function() {
//   $(".p-language__top").hover(
//     function() {
//       $(".p-language__cover").removeClass(".open");
//     }
//   );
// });

// -------------------------------------------------------------

// $(function() {
//   $(".p-language__top").hover(
//     function() { //ホバーしたとき
//       $(".p-language__cover").addClass(".open");
//     },function() {　//ホバーを外したとき
//       $(".p-language__cover").removeClass(".open");
//     }
//   );
// });
// -------------------------------------------------------------

// toggle
$(() => {
  $(".p-menu__item").hover(function(){
    $(this).children(".p-menu__toggle").stop().slideToggle();
  });
});

// ハンバーガーメニュー
$(".l-header__spmenu-trigger, .l-sidemenu__closebtn, .l-sidemenu__closeBottom").on('click',() => {
  let trg = $(".l-header__spmenu-trigger");
  if(!$(".l-sidemenu").is(':animated')){
      trg.toggleClass('active');
      $('html').toggleClass('open');
      $('.l-sidemenu__back').toggleClass('open');
  }
  return false;
});
