function slider(){
    let slideIndex = 1;
    let slides = document.querySelectorAll(".slider-item");
    let prev = document.querySelector(".prev");
    let next = document.querySelector(".next");
    let dotsWrap = document.querySelector(".slider-dots");
    let dots = document.querySelectorAll(".dot");
  
    function showSlides(n) {
      if (n > slides.length) {
        slideIndex = 1;
      }
      if (n < 1) {
        slideIndex = slides.length;
      }
  
      slides.forEach((item) => (item.style.display = "none"));
  
      dots.forEach((item) => item.classList.remove("dot-active"));
  
      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].classList.add("dot-active");
    }
  
    showSlides(slideIndex);
  
    function plusSlides(n) {
      showSlides((slideIndex += n));
    }
    function currentSlides(n) {
      showSlides((slideIndex = n));
    }
  
    prev.addEventListener("click", function () {
      plusSlides(-1);
    });
  
    next.addEventListener("click", function () {
      plusSlides(1);
    });
  
    dotsWrap.addEventListener("click", function (event) {
      for (let i = 0; i < dots.length + 1; i++) {
        if (
          event.target.classList.contains("dot") &&
          event.target == dots[i - 1]
        ) {
          currentSlides(i);
        }
      }
    });
}

module.exports = slider;