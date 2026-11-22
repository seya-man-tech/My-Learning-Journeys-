const display = document.getElementById("display");
const clear = document.getElementById("clear");

let value = "0";

function updateDisplay() {
  display.textContent = value;
}

clear.addEventListener("click", () => {
  value = "0";
  updateDisplay();
});
