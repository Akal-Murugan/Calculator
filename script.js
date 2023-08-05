let displayValue = '0';
let displayValue1='0';
let firstOperand = null;
let secondOperand = null;
let firstOperator = null;
let result = null;
const buttons = document.querySelectorAll('button');

window.addEventListener('keydown', function(e){
    const key = document.querySelector(`button[data-key='${e.keyCode}']`);
    key.click();
});

function updateDisplay() {
    const display = document.getElementById('display');
    display.innerText = displayValue;
    if(displayValue.length > 7) {
        const maxWidth = display.clientWidth; 
        const fontSize = (maxWidth / displayValue.length) * 1.5; 
        display.style.fontSize = `${fontSize}px`;

        const maxLength = Math.floor(maxWidth / fontSize); 
        display.innerText = displayValue;
    } else {
        display.style.fontSize = '6em'; 
    }
    
}
  
updateDisplay();
function clickButton() {
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function() {
            if(buttons[i].classList.contains('operand')) {
                inputOperand(buttons[i].value);
                updateDisplay();
            } else if(buttons[i].classList.contains('operator')) {
                inputOperator(buttons[i].value);
                updateDisplay();
            } else if(buttons[i].classList.contains('equals')) {
                inputEquals();
                updateDisplay();
            } else if(buttons[i].classList.contains('decimal')) {
                inputDecimal(buttons[i].value);
                updateDisplay();
            }  else if(buttons[i].classList.contains('clear')) {
                clearDisplay();
                updateDisplay();
            }  else if(buttons[i].classList.contains('bspace')) 
                inputBackspace();
                updateDisplay();
        }
    )}
}

clickButton();

function inputOperand(operand) {
    operand.toString();
    if(firstOperator === null) {
        if(displayValue1 === '0' || displayValue1 === 0) {
        
            displayValue = operand;
            displayValue1=operand;
        } 
         else {
            displayValue1=displayValue.concat(operand);
            displayValue=displayValue1;
            
        }
    } else  {
        
           displayValue1= displayValue.concat(operand);
            secondOperand = displayValue1;
            displayValue=displayValue1;
            
    }
}

function inputOperator(operator) {
    if(firstOperator===null){
       
        firstOperator = operator;
        firstOperand = displayValue;
        operator.toString();
        displayValue1= displayValue.concat(operator);
        displayValue=displayValue1;
    } 
        
    
}

function inputEquals() {
   
    if(firstOperator === null|| secondOperand===null) {
        displayValue = displayValue;
    }  else {
        
        result = operate(displayValue);
        displayValue = roundAccurately(result, 7).toString();
        firstOperand = displayValue;
        secondOperand = null;
        firstOperator = null;
        displayValue1='0';
        result = null;
        
        
    }
}

function inputDecimal(dot) {
    if(!displayValue.includes(dot)) {
        displayValue1=displayValue.concat('.');
        displayValue=displayValue1;
        console.log(displayValue);
    } 
}

function clearDisplay() {
    displayValue = '0';
    displayValue1='0'
    firstOperand = null;
    secondOperand = null;
    firstOperator = null;
    result = null;
}

function inputBackspace() {
    if (displayValue===null||displayValue==='Error')
    {
        displayValue='0';
    }
    else{
       if(displayValue.length>1) {
        displayValue1= displayValue.slice(0,((displayValue.length)-1));
        displayValue=displayValue1;
       } else{
        displayValue='0';
       }
    }
}
function operate(x) {
    console.log(eval(x));
    return (eval(x));
    
}

function roundAccurately(num, places) {
    return parseFloat(Math.round(num + 'e' + places) + 'e-' + places);
}