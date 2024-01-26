$(function(){
  $('.c-humburger__button').click(function(){
    $('.p-hamburgerPC').addClass('add');
  });
});

$(function(){
  $('.p-hamburgerPC__close').click(function(){
    $('.p-hamburgerPC').removeClass('close');
  });
});

// kids
$(function(){
  $('.slide').click(function(){
    $('.p-hamburgerPC__kidsList').slideToggle(600);
  });
});