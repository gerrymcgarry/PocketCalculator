class Calculator  {
    constructor () {
        this.display = "0";
        this.firstNumber = 0;
        this.memory = 0;
        this.function = "";
        this.answer = false;
        this.screen = document.getElementById('display');
    }

    updateDisplay(value) {
        if (value) {
            this.display = value;
        }
        displayScreen.textContent = this.display;
    } 

    equals() {
        this.display = this[this.function](parseFloat(this.display));
        this.firstNumber = 0;
        this.function = ""; 
        this.answer = true;
    }

    // Functions
    memoryRecall() { this.display = this.memory;  this.updateDisplay(); };
    memoryPlus() { this.memory += parseFloat(this.display); };
    memoryMinus() { this.memory -= parseFloat(this.display); };
    memoryClear() { this.memory = 0;};
    play() {  document.getElementById("audio").play(); window.location.reload(true); };

    sin(number) { this.display = Math.sin(number*Math.PI/180).toPrecision(9); };
    cos(number) { this.display = Math.cos(number*Math.PI/180).toPrecision(9); };
    tan(number) { this.display = Math.tan(number*Math.PI/180).toPrecision(9); ;};
    asin(number) { this.display = Math.round(Math.asin(number)*(180/Math.PI) * 10000000) / 10000000; };
    acos(number) { this.display = Math.round(Math.acos(number)*(180/Math.PI) * 10000000) / 10000000; };
    atan(number) { this.display = Math.round(Math.atan(number)*(180/Math.PI) * 10000000) / 10000000; ;};
    log(number) { this.display = Math.round(Math.log10(number) * 10000000) / 10000000; };
    ln(number) { this.display = Math.round(Math.log(number) * 10000000) / 10000000; };
    sqr(number) { this.display = Math.round(Math.sqrt(number) * 10000000) / 10000000; };
    exp(number) { this.display = Math.round(Math.exp(number) * 10000000) / 10000000; };
    percent(number) { this.display = Math.round(this.display * 100000) / 10000000; };
    fac(number) {
        if (number === 0 || number === 1)
          return 1;
        for (var i = number - 1; i >= 1; i--) {
          number *= i;
        }
        this.display =  number;
      }
    pi() {  this.updateDisplay("3.14158926");};

    backspace() { 
        if (this.display.length != 1) {
            this.display = this.display.substring(0, this.display.length - 1); 
        } else if (this.display !== "0") {
            this.display = "0";
        };
    }

    clear() { this.updateDisplay("0"); };
    clearAll() {            
        this.firstNumber = 0;
        this.function = ""; 
        this.updateDisplay("0");
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

        if (this.answer === false) {
            console.log(this.display);
            if (this.display.length < 10) {
                if (this.display !== "0") {
                    this.display += el.textContent;
                } else {
                    this.display = el.textContent; 
                }
            }
        } else {
            this.display = el.textContent;
            this.answer = false;
        }
        this.updateDisplay();
    }
   
    // Operators
    multiply(secondNumber) { return this.firstNumber * secondNumber; };
    divide(secondNumber) { return this.firstNumber / secondNumber; };
    subtract(secondNumber) { return this.firstNumber - secondNumber; };
    add(secondNumber) { return this.firstNumber + secondNumber; };
    pow(secondNumber) { return Math.pow(this.firstNumber, secondNumber); };
    mod(secondNumber) { return this.firstNumber % secondNumber; };  
}