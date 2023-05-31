const html1 = `&lt;input type="text" id="inputText" placeholder="Enter a word" /&gt;
&lt;button onclick="CapitalizeWord()"&gt;Capitalize&lt;/button&gt;
&lt;h3&gt;Result:
&lt;span id="resultText" class="result-color"&gt;&lt;/span&gt;
&lt;/h3&gt;`;

// const html1 = `
// <input type="text" id="inputText" placeholder="Enter a word" />
// <button onclick="CapitalizeWord()">Capitalize</button>
// <h3>Result: <span id="resultText" class="result-color"></span></h3>
// `;

document.getElementById('html1').innerHTML = html1;

const js1 = `function CapitalizeWord() {
  let inputValueText = document.getElementById('inputText').value;
  let capitalizedWord =
    inputValueText.charAt(0).toUpperCase() + inputValueText.slice(1);
  document.getElementById('resultText').innerHTML = capitalizedWord;
}`;
document.getElementById('js1').innerHTML = js1;

// function convertirStringAHTML(htmlString) {
//   const div = document.createElement('div');
//   div.innerHTML = htmlString;
//   return div.firstChild;
// }

// const elementoHTML = convertirStringAHTML(html1);
// console.log('ELEMENTO:', elementoHTML);

function convertirHTML() {
  var preTag = document.getElementById('html1');
  var codigoHTML = preTag.innerHTML;
  var resultadoDiv = document.getElementById('resultado');
  resultadoDiv.innerHTML = codigoHTML;
}

function copiarCodigoPortapapeles(elementId) {
  var preTag = document.getElementById(elementId);
  var codigoHTML = preTag.innerHTML;

  // Crear un elemento de textarea temporal
  var tempTextArea = document.createElement('textarea');
  tempTextArea.value = codigoHTML;

  // Añadir el elemento al DOM
  document.body.appendChild(tempTextArea);

  // Seleccionar y copiar el contenido del textarea
  tempTextArea.select();
  navigator.clipboard.writeText(codigoHTML);

  // Eliminar el textarea temporal
  document.body.removeChild(tempTextArea);

  // Mostrar un mensaje de éxito (opcional)
  alert('El contenido se ha copiado al portapapeles.');
}
