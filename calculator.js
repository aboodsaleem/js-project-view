

function add(a, b) {
    return a + b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  function divide(a, b) {
    if (b === 0) {
      return "Error: Cannot divide by zero!";
    }
    return a / b;
  }
  
  // الوظيفة الرئيسية التي ستستخدم الوظائف الأساسية
  function operate(operator, num1, num2) {
    switch (operator) {
      case "+":
        return add(num1, num2);
      case "-":
        return subtract(num1, num2);
      case "*":
        return multiply(num1, num2);
      case "/":
        return divide(num1, num2);
      default:
        return "Error: Invalid operator";
    }
  }

  function shekelToUSD(amount) {
    // Replace the conversion rate with the actual rate
    const conversionRate = 0.28;
    return amount * conversionRate;
  }
  
  function USDToShekel(amount) {
    // Replace the conversion rate with the actual rate
    const conversionRate = 3.5;
    return amount * conversionRate;
  }
  
  function shekelToEuro(amount) {
    // Replace the conversion rate with the actual rate
    const conversionRate = 0.23;
    return amount * conversionRate;
  }
  
  function euroToShekel(amount) {
    // Replace the conversion rate with the actual rate
    const conversionRate = 4.35;
    return amount * conversionRate;
  }
 
  