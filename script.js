document.addEventListener('DOMContentLoaded', () => {
    // Access the result display element
    const resultDisplay = document.querySelector('#result');
    // Access all button elements
    const allButtons = document.querySelectorAll('button');
  
    // Add click event listeners to each button
    allButtons.forEach(button => {
      button.addEventListener('click', () => {
        const buttonValue = button.innerText;
        updateDisplay(buttonValue);
      });
    });
  
    // Function to update the display when a button is clicked
    function updateDisplay(value) {
      if (value === 'AC') {
        // Clear the display when 'AC' is pressed
        resultDisplay.innerText = '';
      } else if (value === '=') {
        // When '=' is pressed, calculate the result
        // Replace the '÷' symbol with '/' for division
        const expression = resultDisplay.innerText.replace(/÷/g, '/');
        try {
          // Evaluate the expression and update the display
          resultDisplay.innerText = eval(expression);
        } catch (e) {
          // Display error on invalid input
          resultDisplay.innerText = 'Error';
        }
      } else if (value === '÷') {
        // Add '/' to the display when the divide button is pressed
        resultDisplay.innerText += '/';
      } else {
        // For all other buttons, add their value to the display
        resultDisplay.innerText += value;
      }
    }
  });
  