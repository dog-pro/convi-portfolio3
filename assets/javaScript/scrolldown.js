const btn = document.getElementById(".p-main__scrolldown");

var target = $(".p-information").offset().top;

btn.addEventListener("click", () => {
  window.scroll({
    top: target,
    behavior: "smooth"
  });
});
