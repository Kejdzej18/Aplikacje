window.addEventListener("DOMContentLoaded", () => {
    const form = document.forms.formularz;
    form.addEventListener("submit", (event) => {
        event.preventDefault();
      const number1 = parseFloat(document.getElementById("Liczba 1").value);
      const number2 = parseFloat(document.getElementById("Liczba 2").value);
      const operation = document.getElementById("operation").value;
      
      let result;
  
      switch (operation) {
        case "+":
          result = number1 + number2;
          break;
        case "-":
          result = number1 - number2;
          break;
        case "*":
          result = number1 * number2;
          break;
        case "/":
          if (number2 === 0) {
            result = "Nie można dzielić przez zero";
          } else {
            result = number1 / number2;
          }
          break;
        case "%":
          result = number1 % number2;
          break;
        case "^":
          result = Math.pow(number1, number2);
          break;
        default:
          result = "Nieznane działanie";
      }
  
      const resultElement = document.getElementById("result");
      if (typeof result === "number") {
        resultElement.textContent = `${number1} ${operation} ${number2} = ${result}`;
  
      } else {
        resultElement.textContent = result;
      }
    });
  });