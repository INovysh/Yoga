function tabs() {
  let infoHeaderTab = document.querySelectorAll(".info-header-tab");
  let infoHeader = document.querySelector(".info-header");
  let infoTabcontent = document.querySelectorAll(".info-tabcontent");

  function hideTabContent(a) {
    for (let i = a; i < infoTabcontent.length; i++) {
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
    let target = event.target;
    if (target && target.classList.contains("info-header-tab")) {
      for (let i = 0; i < infoHeaderTab.length; i++) {
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
