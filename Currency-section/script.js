let curr1 = document.querySelector(".curr1");
let curr2 = document.querySelector(".curr2");
let cstable__input = document.querySelector(".cstable__input");
let currSelect = document.querySelector("#currSelect");
let currRow1 = document.querySelector(".currRow1");
let currRow2 = document.querySelector(".currRow2");
let selectedCurr = 1;
let dollar = 1;
let euro = 1;
let azn = 1;
cstable__input.addEventListener("input", (e) => {
  let amount = parseFloat(e.target.value);

  // selectedCurr === 1.7
  //   ? (dollar = amount * selectedCurr)
  //   : selectedCurr == 1.9
  //   ? (euro = amount * selectedCurr)
  //   : (azn = selectedCurr * amount);
});
currSelect.addEventListener("change", (e) => {
  selectedCurr = e.target.value;
  writeCurrText(selectedCurr);
});
function writeCurrText(selectedCurr) {
  if (selectedCurr == 1.7) {
    (curr1.textContent = "AZN")((curr2.textContent = "EUR"));
  } else if (selectedCurr == 1.9) {
    (curr1.textContent = "AZN")((curr2.textContent = "USD"));
  } else {
    (curr1.textContent = "USD")((curr2.textContent = "EUR"));
  }
}
