class Calculator  {
    constructor () {
        this.display = "0";
        this.firstNumber = 0;
        this.memory = 0;
        this.function = "";
        this.screen = document.getElementById('display');
    }
    updateDisplay() { displayScreen.textContent = calculator.display; } 

    updateDisplay2(value) {
        calculator.display = value;
        displayScreen.textContent = calculator.display;
    } 

    equals() {
        calculator[calculator.function](parseFloat(calculator.display));
        calculator.display = calculator.firstNumber;
    }

    // Single Functions
    memoryRecall() { this.display = this.memory;  this.updateDisplay(); };
    memoryPlus() { this.memory += parseFloat(this.display); };
    memoryMinus() { this.memory -= parseFloat(this.display); };
    memoryClear() { this.memory = 0;};
    play() { document.getElementById("audio").play(); };

    sin(number) { this.display = Math.round(Math.sin(number) * 10000000) / 10000000; };
    cos(number) { this.display = Math.round(Math.cos(number) * 10000000) / 10000000; };
    tan(number) { this.display = Math.round(Math.tan(number) * 10000000) / 10000000; ;};
    log(number) { this.display = Math.round(Math.log10(number) * 10000000) / 10000000; };
    sqr(number) { this.display = Math.round(Math.sqrt(number) * 10000000) / 10000000; };
    exp(number) { this.display = Math.round(Math.exp(number) * 10000000) / 10000000; };
    percent(number) { this.display = Math.round(this.display * 100000) / 10000000; };
    pi() {  this.updateDisplay2("3.14158926");};
    clear() { this.updateDisplay2("0"); };
    clearAll() {            
        this.firstNumber = 0;
        this.function = ""; 
        this.updateDisplay2("0");
    };
    plusMinus() { 
        if (this.display !== '0') {
            if (this.display[0] !== '-') {
                this.display = "-".concat(this.display);
            } else {
                this.display = this.display.substring(1, this.display.length);
            }
        }
    };
    number(el) {
        if (this.display.length < 8) {
            if (this.display !== "0") {
                this.display += el.textContent;
            } else {
                this.display = el.textContent;
            }
        this.updateDisplay();
        }
    }
    backspace() { if (this.display.length != 1) {
        this.display = this.display.substring(0, this.display.length - 1); 
    } else if (this.display !== "0") {
        this.display = "0";
     };
    }
    // Double functions
    multiply(secondNumber) { this.firstNumber = this.firstNumber * secondNumber; };
    divide(secondNumber) { this.firstNumber = this.firstNumber / secondNumber; };
    subtract(secondNumber) { this.firstNumber -= secondNumber; };
    add(secondNumber) { this.firstNumber += secondNumber; };
    pow(secondNumber) { this.firstNumber = Math.pow(this.firstNumber, secondNumber); };
    mod(secondNumber) { this.firstNumber = this.firstNumber % secondNumber; };  
}