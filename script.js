//your code here
const evaluatedText = document.getElementById('evaluatedText');
const letterCount = document.getElementById('letterCount');

// Add an event listener to the input element for 'input' event
evaluatedText.addEventListener('input', function() {
  // Get the current value of the input
  const text = evaluatedText.value;

  // Update the letter count in the h3 element
  letterCount.textContent = `${text.length}`;
});