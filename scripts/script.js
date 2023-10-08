import { Modal } from "./modal.js";
import { AlertError } from "./alert-error.js";
import { IMC } from "./utils.js";
import { notANumber } from "./utils.js";

const form = document.querySelector("form");
const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");

inputWeight.oninput = () => {
  AlertError.close();
};
inputHeight.oninput = () => {
  AlertError.close();
};

form.onsubmit = (event) => {
  event.preventDefault();

  const weight = inputWeight.value;
  const height = inputHeight.value;

  const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height);

  if (weightOrHeightIsNotANumber) {
    AlertError.open();
    return;
  }

  const result = IMC(weight, height);
  const message = `Seu IMC é de ${result}`;
  Modal.message.innerText = message;
  Modal.open();
};
