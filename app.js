if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js');
}
const calculator = new Calculator();
calculator.numberButtons.forEach((el) => {
  el.addEventListener('click', () => calculator.number(el) );
});

calculator.functionButtons.forEach((el) => {
  el.addEventListener('click', () => {
    calculator[el.id](parseFloat(calculator.display));
    calculator.updateDisplay();
    calculator.answer = true;
  });
});
calculator.editButtons.forEach((el) => {
  el.addEventListener('click', () => {
    calculator[el.id](parseFloat(calculator.display));
    calculator.updateDisplay();
  });
});
calculator.operatorButtons.forEach((el) => {
  el.addEventListener('click', () => {
    if (calculator.function === '') {
      calculator.firstNumber = parseFloat(calculator.display);
      calculator.function = el.id;
      calculator.updateDisplay('0');
    } else {
      calculator.firstNumber = calculator[calculator.function](parseFloat(calculator.display));
      calculator.display = 0;
      calculator.function = el.id;
      calculator.updateDisplay();
    }
  });
});
