function calc() {
  let persons = document.querySelectorAll(".counter-block-input")[0];
  let days = document.querySelectorAll(".counter-block-input")[1];
  let place = document.getElementById("select");
  let totalValue = document.getElementById("total");
  let personsSum = 0;
  let daysSum = 0;
  let total = 0;

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
      let a = total;
      totalValue.innerHTML = a * this.options[this.selectedIndex].value;
    }
  });
}

module.exports = calc;
