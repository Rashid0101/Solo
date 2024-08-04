let minNumbr = document.querySelector(".result");
let minNumberTow = document.querySelector(".result-Tow");

let count = 0;
let countTow = 0;

function numberPlus() {
  count += 1;
  minNumbr.textContent = count;
}

function numberPlusTow() {
  count += 2;
  minNumbr.textContent = count;
}

function numberPlusThree() {
  count += 3;
  minNumbr.textContent = count;
}

function resetEl() {
  minNumbr.textContent = 0;
  count = 0;
}

////////

function numberExtra() {
  countTow += 1;
  minNumberTow.textContent = countTow;
}

function numberExtraTow() {
  countTow += 2;
  minNumberTow.textContent = countTow;
}

function numberExtraThree() {
  countTow += 3;
  minNumberTow.textContent = countTow;
}

function resetElTow() {
  minNumberTow.textContent = 0;
  countTow = 0;
}
