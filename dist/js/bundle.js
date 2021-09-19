/******/ (() => {
  // webpackBootstrap
  /******/ var __webpack_modules__ = {
    /***/ "./src/js/parts/calc.js":
      /*!******************************!*\
  !*** ./src/js/parts/calc.js ***!
  \******************************/
      /***/ (module) => {
        function calc() {
          var persons = document.querySelectorAll(".counter-block-input")[0];
          var days = document.querySelectorAll(".counter-block-input")[1];
          var place = document.getElementById("select");
          var totalValue = document.getElementById("total");
          var personsSum = 0;
          var daysSum = 0;
          var total = 0;
          totalValue.innerHTML = 0;
          persons.addEventListener("input", function () {
            personsSum = +this.value;
            total = personsSum * daysSum * 400;

            if (days.value == "") {
              totalValue.innerHTML = 0;
            } else {
              totalValue.innerHTML = total;
            }
          });
          days.addEventListener("input", function () {
            daysSum = +this.value;
            total = personsSum * daysSum * 400;

            if (persons.value == "") {
              totalValue.innerHTML = 0;
            } else {
              totalValue.innerHTML = total;
            }
          });
          place.addEventListener("change", function () {
            if (persons.value == "" || days.value == "") {
              totalValue.innerHTML = 0;
            } else {
              var a = total;
              totalValue.innerHTML = a * this.options[this.selectedIndex].value;
            }
          });
        }

        module.exports = calc;

        /***/
      },

    /***/ "./src/js/parts/form.js":
      /*!******************************!*\
  !*** ./src/js/parts/form.js ***!
  \******************************/
      /***/ (module) => {
        function form() {
          var message = {
            loading: "Загрузка...",
            success: "Спасибо! Скоро мы с вами свяжемся!",
            failure: "Что-то пошло не так...",
          };
          var form = document.querySelector(".main-form");
          var formId = document.getElementById("form");

          function sendForm(elem) {
            var input = elem.getElementsByTagName("input");
            var statusMessage = document.createElement("div");
            statusMessage.classList.add("status");
            elem.addEventListener("submit", function (event) {
              event.preventDefault();
              elem.appendChild(statusMessage);
              var request = new XMLHttpRequest();
              request.open("POST", "../server.php");
              request.setRequestHeader(
                "Content-type",
                "application/json; charset=utf-8"
              );
              var formData = new FormData(elem);
              var obj = {};
              formData.forEach(function (value, key) {
                obj[key] = value;
              });
              var json = JSON.stringify(obj);
              request.send(json);
              request.addEventListener("readystatechange", function () {
                if (request.readyState < 4) {
                  statusMessage.innerHTML = message.loading;
                } else if (request.readyState === 4 && request.status == 200) {
                  statusMessage.innerHTML = message.success;
                } else {
                  statusMessage.innerHTML = message.failure;
                }
              });

              for (var i = 0; i < input.length; i++) {
                input[i].value = "";
              }
            });
          }

          sendForm(form);
          sendForm(formId);
        }

        module.exports = form;

        /***/
      },

    /***/ "./src/js/parts/modal.js":
      /*!*******************************!*\
  !*** ./src/js/parts/modal.js ***!
  \*******************************/
      /***/ (module) => {
        function modal() {
          var more = document.querySelector(".more");
          var overlay = document.querySelector(".overlay");
          var close = document.querySelector(".popup-close");
          more.addEventListener("click", function () {
            overlay.style.display = "block";
            this.classList.add("more-splash");
            document.body.style.overflow = "hidden";
          });
          close.addEventListener("click", function () {
            overlay.style.display = "none";
            more.classList.remove("more-splash");
            document.body.style.overflow = "";
          });
        }

        module.exports = modal;

        /***/
      },

    /***/ "./src/js/parts/slider.js":
      /*!********************************!*\
  !*** ./src/js/parts/slider.js ***!
  \********************************/
      /***/ (module) => {
        function slider() {
          var slideIndex = 1;
          var slides = document.querySelectorAll(".slider-item");
          var prev = document.querySelector(".prev");
          var next = document.querySelector(".next");
          var dotsWrap = document.querySelector(".slider-dots");
          var dots = document.querySelectorAll(".dot");

          function showSlides(n) {
            if (n > slides.length) {
              slideIndex = 1;
            }

            if (n < 1) {
              slideIndex = slides.length;
            }

            slides.forEach(function (item) {
              return (item.style.display = "none");
            });
            dots.forEach(function (item) {
              return item.classList.remove("dot-active");
            });
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
            for (var i = 0; i < dots.length + 1; i++) {
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

        /***/
      },

    /***/ "./src/js/parts/tabs.js":
      /*!******************************!*\
  !*** ./src/js/parts/tabs.js ***!
  \******************************/
      /***/ (module) => {
        function tabs() {
          var infoHeaderTab = document.querySelectorAll(".info-header-tab");
          var infoHeader = document.querySelector(".info-header");
          var infoTabcontent = document.querySelectorAll(".info-tabcontent");

          function hideTabContent(a) {
            for (var i = a; i < infoTabcontent.length; i++) {
              infoTabcontent[i].classList.remove("show");
              infoTabcontent[i].classList.add("hide");
            }
          }

          hideTabContent(1);

          function showTabContent(b) {
            if (infoTabcontent[b].classList.contains("hide")) {
              infoTabcontent[b].classList.remove("hide");
              infoTabcontent[b].classList.add("show");
            }
          }

          infoHeader.addEventListener("click", function (event) {
            var target = event.target;

            if (target && target.classList.contains("info-header-tab")) {
              for (var i = 0; i < infoHeaderTab.length; i++) {
                if (target === infoHeaderTab[i]) {
                  hideTabContent(0);
                  showTabContent(i);
                  break;
                }
              }
            }
          });
        }

        module.exports = tabs;

        /***/
      },

    /***/ "./src/js/parts/timer.js":
      /*!*******************************!*\
  !*** ./src/js/parts/timer.js ***!
  \*******************************/
      /***/ (module) => {
        function timer() {
          var deadLine = "2022-01-01";

          function getTimeRemaining(endTime) {
            var t = Date.parse(endTime) - Date.parse(new Date());
            var seconds = Math.floor((t / 1000) % 60);
            var minutes = Math.floor((t / 1000 / 60) % 60);
            var hours = Math.floor(t / 1000 / 60 / 60);
            return {
              total: t,
              seconds: seconds,
              minutes: minutes,
              hours: hours,
            };
          }

          function setClock(id, endtime) {
            var timer = document.getElementById(id);
            var hours = timer.querySelector(".hours");
            var minutes = timer.querySelector(".minutes");
            var seconds = timer.querySelector(".seconds");
            var timeInterval = setInterval(updateClock, 1000);

            function updateClock() {
              var t = getTimeRemaining(endtime);

              function addZero(num) {
                if (num < 10) {
                  return "0" + num;
                } else return num;
              }

              hours.textContent = addZero(t.hours);
              minutes.textContent = addZero(t.minutes);
              seconds.textContent = addZero(t.seconds);

              if (t.total < 0) {
                clearInterval(timeInterval);
                hours.textContent = "00";
                minutes.textContent = "00";
                seconds.textContent = "00";
              }
            }
          }

          setClock("timer", deadLine);
        }

        module.exports = timer;

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  var __webpack_exports__ = {};
  // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
  (() => {
    /*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
    //require("es6-promise").polyfill();
    window.addEventListener("DOMContentLoaded", function () {
      "use strict";

      var calc = __webpack_require__(
        /*! ./parts/calc.js */ "./src/js/parts/calc.js"
      );

      var form = __webpack_require__(
        /*! ./parts/form.js */ "./src/js/parts/form.js"
      );

      var modal = __webpack_require__(
        /*! ./parts/modal.js */ "./src/js/parts/modal.js"
      );

      var slider = __webpack_require__(
        /*! ./parts/slider.js */ "./src/js/parts/slider.js"
      );

      var tabs = __webpack_require__(
        /*! ./parts/tabs.js */ "./src/js/parts/tabs.js"
      );

      var timer = __webpack_require__(
        /*! ./parts/timer.js */ "./src/js/parts/timer.js"
      );

      calc();
      form();
      modal();
      slider();
      tabs();
      timer();
    });
  })();

  /******/
})();
//# sourceMappingURL=bundle.js.map
