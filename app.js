console.log("hello world");
const h1 = document.querySelector("h1");
const amount = document.querySelector("#meal");
const sbmt = document.querySelector("#sbm");
const error = document.querySelector("span");

function initApp() {
  h1.innerText = "your tip calculator application is ready";
  amount.value = 0;
  sbmt.innerHTML = "Calculate";
}
initApp();

sbmt.addEventListener("click", calculate);

function calculate() {
  // check if value entered
  if (amount.value <= 0) {
    console.log("you have entered wrong value");
    error.classList.remove("hide");
    sbmt.innerHTML = "Calculate";
    return;
  }
  error.classList.add("hide");
  // get the value
  const price = amount.value;
  let tip = (price * 0.15).toFixed(2);
  h1.innerHTML = `Your meal is $${price} and you should tip $${tip}`;
  sbmt.innerHTML = "Calculate Again";

  // calculate the percentage
  // show the message
}
