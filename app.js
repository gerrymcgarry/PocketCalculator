
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js');
}
const calculator = new Calculator();

const numberButtons = document.querySelectorAll(".number");
const functionButtons = document.querySelectorAll(".function");
const operatorButtons = document.querySelectorAll(".operator");
const editButtons = document.querySelectorAll(".edit");
const displayScreen = document.getElementById('display');

numberButtons.forEach( (el) => {
    el.addEventListener('click', () => calculator.number(el) );
});

functionButtons.forEach( (el) => {
    el.addEventListener('click', () => {
        calculator[el.id](parseFloat(calculator.display));
        calculator.updateDisplay();
        calculator.answer = true;
    });
});
editButtons.forEach( (el) => {
    el.addEventListener('click', () => {
        calculator[el.id](parseFloat(calculator.display));
        calculator.updateDisplay();
    });
});
operatorButtons.forEach( (el) => {
    el.addEventListener('click', () => {
        if (calculator.function === "") {
            calculator.firstNumber = parseFloat(calculator.display);
            calculator.function = el.id;
            calculator.updateDisplay("0");
        } else {
            calculator.firstNumber = calculator[calculator.function](parseFloat(calculator.display));
            calculator.display = 0;
            calculator.function = el.id;
            calculator.updateDisplay();
        }
    });
});
