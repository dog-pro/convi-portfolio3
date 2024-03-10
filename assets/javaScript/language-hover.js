$(() => {
  $(".p-language").hover(function(){
    $(this).children(".p-language__cover").stop().slideToggle();
  });
});
