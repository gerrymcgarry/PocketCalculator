class Calculator  {
    constructor () {
        this.display = "0";
        this.firstNumber = 0;
        this.memory = 0;
        this.function = "";
        this.screen = document.getElementById('display');
    }

    // Single Functions
    memoryRecall() { this.display = this.memory;  updateDisplay(); };
    memoryPlus() { this.memory += parseFloat(this.display); console.log("+" + this.display);};
    memoryMinus() { this.memory -= parseFloat(this.display); };
    memoryClear() { this.memory = 0;};
    play() { document.getElementById("audio").play(); };

    sin(number) { this.display = Math.round(Math.sin(number) * 10000000) / 10000000; };
    cos(number) { this.display = Math.round(Math.cos(number) * 10000000) / 10000000; };
    tan(number) { this.display = Math.round(Math.tan(number) * 10000000) / 10000000; };
    log(number) { this.display = Math.round(Math.log10(number) * 10000000) / 10000000; };
    sqr(number) { this.display = Math.round(Math.sqrt(number) * 10000000) / 10000000; };
    exp(number) { this.display = Math.round(Math.exp(number) * 10000000) / 10000000; };

    pi() { this.display = "3.14158926";updateDisplay();};
    clear() {this.display = "0";updateDisplay();};
    clearAll() {            
        this.firstNumber = 0;
        this.function = ""; 
        this.display = "0";
        updateDisplay();
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
        updateDisplay();
        }
    }
    backspace() { if (this.display.length != 1) {
        this.display = this.display.substring(0, this.display.length - 1); 
    } else if (this.display !== "0") {
        this.display = "0";
     };
    }
    // Double functions
    multiply() { this.firstNumber = this.firstNumber * parseFloat(this.display); };
    divide() { this.firstNumber = this.firstNumber / parseFloat(this.display); };
    subtract() { this.firstNumber -= parseFloat(this.display); };
    add() { this.firstNumber += parseFloat(this.display); };
    pow() { this.firstNumber = Math.pow(this.firstNumber, parseFloat(this.display)); };
    mod() { this.firstNumber = this.firstNumber % parseFloat(this.display); };


    // To Do
    percent() {console.log("%");};

}