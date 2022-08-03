const input = document.querySelector(".input");
const floatButton = document.querySelector(".float-button");
const operationButton = document.querySelectorAll(".operation-button");

function writeNumber(element) {
  if (input.innerHTML === "0") {
    input.innerHTML = element.innerHTML;
  } else {
    input.innerHTML += element.innerHTML;
  }
  for (let i = 0; i < operationButton.length; i++) {
    if ((operationButton[i].disabled = true)) {
      operationButton[i].disabled = false;
    }
  }
}

function allClear() {
  input.innerHTML = "0";
  floatButton.disabled = false;
  for (let i = 0; i < operationButton.length; i++) {
    operationButton[i].disabled = false;
  }
}

function decimal(element) {
  input.innerHTML += element.innerHTML;
  floatButton.disabled = true;
}

function operation(element) {
  input.innerHTML += element.value;
  for (let i = 0; i < operationButton.length; i++) {
    operationButton[i].disabled = true;
  }
  floatButton.disabled = false;
}

function calculate() {
  try {
    if (input.innerHTML !== " ") {
      const result = eval(input.innerHTML);
      input.innerHTML = result;
    }
  } catch (err) {
    input.innerHTML = "error";
  }
}
