$(document).ready(function () {
  $(".banner").owlCarousel({
    items: 1,
    margin: 10,
    loop: true,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 4000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
});

let Mebleg, Ay, Amount, Month;
let kapAmount = document.getElementById("kap-amount");
let kapMonth = document.getElementById("kap-month");

kapAmount.addEventListener("input", (e) => {
  Mebleg = parseFloat(e.target.value);
});
kapMonth.addEventListener("input", (e) => {
  Ay = parseFloat(e.target.value);
});

//update Amount
kapAmount.addEventListener("input", (e) => {
  Amount = parseFloat(e.target.value);
  Calculate();
});

// update Month
kapMonth.addEventListener("input", (e) => {
  Month = parseFloat(e.target.value);
  Calculate();
});

function Calculate() {
  const amount = document.querySelector("#kap-amount").value;
  const months = document.querySelector("#kap-month").value;
  const interest = (amount * 0.0333) / months;
  let total = (amount / months + interest).toFixed(2);
  let opts = '{ style: "decimal", currency: "US" }';

  document.querySelector("#inner-amount").innerText =
    parseFloat(Amount).toLocaleString("en-US", opts) + "₼";

  document.querySelector("#inner-months").innerText =
    parseFloat(Month).toLocaleString("en-US", opts) + "ay";

  document.querySelector("#total").innerText =
    parseFloat(total).toLocaleString("en-US", opts) + "₼";
}

function initialize() {
  Amount = parseFloat(document.getElementById("kap-amount").value);
  Month = parseFloat(document.getElementById("kap-month").value);
  Calculate();
}

initialize();
let numberInput = document.querySelector(".number-input");

numberInput.addEventListener("keypress", (e) => {
  if (e.keyCode == 13) {
  }
});
