

let currentInput = "";
let currentOperator = "";
let firstOperand = "";

function updateDisplay() {
  display.value = currentInput || "0";
}

function clearCalculator() {
  currentInput = "";
  currentOperator = "";
  firstOperand = "";
  updateDisplay();
}

function handleNumberClick(number) {
  currentInput += number;
  updateDisplay();
}

function handleOperatorClick(operator) {
  if (currentInput !== "") {
    if (firstOperand !== "") {
      currentInput = operate(currentOperator, parseFloat(firstOperand), parseFloat(currentInput)).toString();
      firstOperand = currentInput;
    } else {
      firstOperand = currentInput;
    }
    currentOperator = operator;
    currentInput = "";
    updateDisplay();
  }
}





document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll("button");
  
    buttons.forEach(button => {
      button.addEventListener("click", function () {
        const buttonText = button.textContent;
  
        switch (buttonText) {
            case "ShtoD":
                if (currentInput !== "") {
                  currentInput = shekelToUSD(parseFloat(currentInput)).toString();
                  updateDisplay();
                }
                break;
      
              case "DtoSh":
                if (currentInput !== "") {
                  currentInput = USDToShekel(parseFloat(currentInput)).toString();
                  updateDisplay();
                }
                break;
      
              case "ShtoEuro":
                if (currentInput !== "") {
                  currentInput = shekelToEuro(parseFloat(currentInput)).toString();
                  updateDisplay();
                }
                break;
      
              case "EurotoSh":
                if (currentInput !== "") {
                  currentInput = euroToShekel(parseFloat(currentInput)).toString();
                  updateDisplay();
                }
                break;  
          case "=":
            if (currentInput !== "" && currentOperator !== "" && firstOperand !== "") {
              currentInput = operate(currentOperator, parseFloat(firstOperand), parseFloat(currentInput)).toString();
              firstOperand = "";
              currentOperator = "";
              updateDisplay();
            }
            break;
  
          case "C":
            clearCalculator();
            break;
  
          case "+":
          case "-":
          case "*":
          case "/":
            handleOperatorClick(buttonText);
            break;
  
          default:
            handleNumberClick(buttonText);
            break;
        }
      });
    });
  });
  