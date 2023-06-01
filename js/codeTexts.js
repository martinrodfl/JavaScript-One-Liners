/* 1 */
const html1 = `&lt;input type="text" id="inputText" placeholder="Enter a word" /&gt;
&lt;button onclick="CapitalizeWord()"&gt;Capitalize&lt;/button&gt;
&lt;h3&gt;Result:
&lt;span id="resultText" class="result-color"&gt;&lt;/span&gt;
&lt;/h3&gt;`;

document.getElementById('html1').innerHTML = html1;

const js1 = `function CapitalizeWord() {
  let inputValueText = document.getElementById('inputText').value;
  let capitalizedWord =
    inputValueText.charAt(0).toUpperCase() + inputValueText.slice(1);
  document.getElementById('resultText').innerHTML = capitalizedWord;
}`;
document.getElementById('js1').innerHTML = js1;

/* 2 */
var html2 = `&lt;input type="number" id="inputPercentageNumber" placeholder="Enter a percentage" /&gt;
&lt;input type="number" id="inputValueNumber" placeholder="Enter a value" /&gt;
&lt;button class="btn-exercise" onclick="CalculatePercent()">Percentage&lt;/button/&gt;
&lt;h3&gt;Result: &lt;span id="resultPercentage" class="result-color"/&gt;&lt;/span&gt;&lt;h3/&gt`;

document.getElementById('html2').innerHTML = html2;

const js2 = `
function CalculatePercent() {
  let inputPercentageNumber = document.getElementById(
    'inputPercentageNumber'
  ).value;
  let inputValueNumber = document.getElementById('inputValueNumber').value;

  const calculate = (inputValueNumber, inputPercentageNumber) => {
    return (inputValueNumber * inputPercentageNumber) / 100;
  };

  document.getElementById('resultPercentage').innerHTML = calculate(
    inputPercentageNumber,
    inputValueNumber
  );
}
`;
document.getElementById('js2').innerHTML = js2;

/* 3 */

function copyCodeToClipboard(elementId) {
  // Get the pre tag element
  const preTag = document.getElementById(elementId);

  // Get the HTML code from the pre tag element
  const htmlCode = preTag.innerHTML;

  // Create a temporary textarea element
  const tempTextArea = document.createElement('textarea');

  // Set the value of the textarea element to the HTML code
  tempTextArea.value = htmlCode;

  // Append the textarea element to the body element
  document.body.appendChild(tempTextArea);

  // Select the text in the textarea element
  tempTextArea.select();

  // Copy the text from the textarea element to the clipboard
  navigator.clipboard.writeText(htmlCode);

  // Remove the textarea element from the body element
  document.body.removeChild(tempTextArea);

  // Show the dialog
  const dialog = document.getElementById('myDialog');
  dialog.style.display = 'block';

  // Close the dialog after 1.5 seconds if the close button is not pressed
  setTimeout(() => {
    if (dialog.style.display === 'block') {
      dialog.style.display = 'none';
    }
  }, 1500);

  // Close the dialog when the close button is clicked
  document.getElementById('dialog-close').addEventListener('click', () => {
    dialog.style.display = 'none';
  });
}
