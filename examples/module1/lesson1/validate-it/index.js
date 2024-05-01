const MIN_VALUE = 0;
const MAX_VALUE = 100;

const isInputNumber = (input) => !isNaN(input);
const isInputValid = (input) => input > MIN_VALUE && input < MAX_VALUE;
const clearFormInput = () => {
  document.getElementById('input').value = '';
  document.getElementById('result').innerHTML = '';
};

const validateInput = () => {
  const inputElement = document.getElementById('input');
  const resultElement = document.getElementById('result');
  const inputValue = inputElement.value;

  if (!isInputNumber(inputValue)) {
    resultElement.innerHTML = 'Invalid';
    return;
  }
  const numericInputValue = Number(inputValue)
  if (!isInputValid(numericInputValue)) {
    resultElement.innerHTML = 'Invalid';
    return;
  }
  resultElement.innerHTML = 'Valid';
};

function main() {
  const validateButton = document.getElementById('button');
  const clearButton = document.getElementById('button2');

  validateButton.addEventListener('click', validateInput);
  clearButton.addEventListener('click', clearFormInput);
}

main();
