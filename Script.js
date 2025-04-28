
function appendDot() {
    if (!numberInput.value.includes('.')) {
      numberInput.value += '.';
    }
  }

  function appendOperator(op) {
    if (numberInput.value !== '' && !isNaN(numberInput.value[numberInput.value.length - 1])) {
      numberInput.value += op;
    }
  }