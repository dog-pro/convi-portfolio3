
const btn = document.querySelector(".p-main__scrolldown");
let target = $(".p-information").offset().top;

btn.addEventListener("click", () => {
  target = $(".p-information").offset().top;

  window.scrollTo({
    top: target,
    behavior: "smooth"
  });
});