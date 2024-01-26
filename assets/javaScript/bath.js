"use strict"

$('.p-bath__select li').on("click",function(){

  let contentsList = $(".p-bathList");

  let indexList = $(".p-bath__select li").index(this);

  contentsList.addClass('is-hidden');
  contentsList.eq(indexList).removeClass('is-hidden');
});
