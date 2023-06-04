//*? IIFE position page in top ---------------------------------------------- */
(function () {
  window.onload = function () {
    window.scrollTo(0, 0);
  };
})();

//*? Format string to html ------------------------------------------------- */
function FormatStringToHtml(code) {
  if (code.startsWith('&')) {
    let formatedCode = code.replace(/&lt;/g, '<').replace(/&gt;/g, '>');
    formatedCode = formatedCode.replace(
      'class="result-color"',
      'class="result-color"'
    );
    console.log('HTML FORMATEADO:', formatedCode);
    return formatedCode;
  } else {
    console.log('JS SIN FORMATEAR:', code);
    return code;
  }
}

//* Format html to string(function without use)------------------------------------------------- */
// function FormatHtmlToString(code) {
//   if (code.startsWith('html')) {
//     return code;
//   } else {
//     let formattedCode = code.replace(/</g, '&lt;').replace(/>/g, '&gt;');
//     formattedCode = formattedCode.replace(
//       'class="result-color"',
//       'class="result-color"'
//     );
//     return formattedCode;
//   }
// }

//*? Copy code to clipboard ------------------------------------------------- */

function copyCodeToClipboard(elementId) {
  // Get the pre tag element
  const preTag = document.getElementById(elementId);
  // Get the HTML code from the pre tag element
  const htmlCode = preTag.innerHTML;
  // Create a temporary textarea element
  const tempTextArea = document.createElement('textarea');
  // Set the value of the textarea element to the HTML code
  let formatedCode = FormatStringToHtml(htmlCode);
  tempTextArea.value = formatedCode;
  // FormatStringToHtml(htmlCode);
  // Append the textarea element to the body element
  document.body.appendChild(tempTextArea);
  // Select the text in the textarea element
  tempTextArea.select();
  // Copy the text from the textarea element to the clipboard
  navigator.clipboard.writeText(formatedCode);
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

//*? Change arrow class ------------------------------------------------------ */

var codeDetails = document.querySelectorAll('.details');

codeDetails.forEach(function (details) {
  var arrowIcon = details.querySelector('.bx');
  details.addEventListener('toggle', function () {
    if (details.open) {
      arrowIcon.classList.remove('bxs-left-arrow', 'bx-fade-left');
      arrowIcon.classList.add('bxs-up-arrow', 'bx-tada');
    } else {
      arrowIcon.classList.remove('bxs-up-arrow', 'bx-tada');
      arrowIcon.classList.add('bxs-left-arrow', 'bx-fade-left');
    }
  });
});

//*? Progress bar indicator ------------------------------------------------- */

window.addEventListener('scroll', function () {
  var scrollProgress = document.getElementById('scrollProgress');
  var maxScrollHeight =
    document.documentElement.scrollHeight - window.innerHeight;
  var scrolledPercentage = (window.scrollY / maxScrollHeight) * 100;
  scrollProgress.value = scrolledPercentage;
});

//*? Togggle switch color mode ------------------------------------------------- */

function toggleColorMode() {
  let switchColor;
  switchColor = document.getElementById('switch-color-mode');
  const elementsLights = document.querySelectorAll(
    'nav, article, footer, header'
  );
  const elementsDark = document.querySelectorAll('main, body');

  switchColor.addEventListener('change', () => {
    // console.log('switch', switchColor.checked);
    if (switchColor.checked === true) {
      /* TRUUUUUUUE */
      console.log('truuuuueeeeee');
      elementsLights.forEach((element) => {
        element.classList.add('light-mode');
        element.classList.remove('dark-mode');
      });
      elementsDark.forEach((element) => {
        element.classList.add('dark-mode');
        element.classList.remove('light-mode');
      });
    } else {
      /* FAAAAAAALSE */
      console.log('falseeeeeee');
      elementsLights.forEach((element) => {
        element.classList.add('dark-mode');
        element.classList.remove('light-mode');
      });
      elementsDark.forEach((element) => {
        element.classList.remove('dark-mode');
        element.classList.add('light-mode');
      });
    }
  });
}
