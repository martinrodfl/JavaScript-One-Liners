//*? IIFE position page in top ---------------------------------------------- */
(function () {
  window.onload = function () {
    window.scrollTo(0, 0);
  };
})();

window.addEventListener('scroll', function () {
  let maxScrollHeight =
    document.documentElement.scrollHeight - window.innerHeight;
  var scrolledPercentage = (window.scrollY / maxScrollHeight) * 100;
  scrollProgress.value = scrolledPercentage;
  const arrowToTop = document.getElementById('scrollToTop');
  if (scrolledPercentage > 3) {
    arrowToTop.classList.remove('hiden');
  } else {
    arrowToTop.classList.add('hiden');
  }
});

//* Format string to html ------------------------------------------------- */
// function FormatStringToHtml(code) {
//   if (code.startsWith('&')) {
//     let formatedCode = code.replace(/&lt;/g, '<').replace(/&gt;/g, '>');
//     formatedCode = formatedCode.replace(
//       'class="result-color"',
//       'class="result-color"'
//     );
//     console.log('HTML FORMATEADO:', formatedCode);
//     return formatedCode;
//   } else {
//     console.log('JS SIN FORMATEAR:', code);
//     return code;
//   }
// }

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
  const preTag = document.getElementById(elementId);
  const htmlCode = preTag.innerHTML;
  const tempTextArea = document.createElement('textarea');
  const formatedCode = htmlCode;
  tempTextArea.value = formatedCode;
  document.body.appendChild(tempTextArea);
  tempTextArea.select();
  navigator.clipboard.writeText(formatedCode);
  document.body.removeChild(tempTextArea);

  const clickedElement = event.currentTarget;
  const clickedElementId = clickedElement.previousElementSibling.id;

  console.log(clickedElementId);
  const copiedText = document.getElementById(clickedElementId);

  if (copiedText) {
    copiedText.style.display = 'block';

    setTimeout(() => {
      copiedText.style.display = 'none';
    }, 2000);

    copiedText.classList.add('vibrate');

    setTimeout(() => {
      copiedText.classList.remove('vibrate');
    }, 300);
  }

  const copiedTextElements = document.querySelectorAll('.copiedText');
  copiedTextElements.forEach((copiedText, index) => {
    copiedText.setAttribute('data-copiedtext-id', `copiedText${index + 1}`);
    copiedText.addEventListener('click', () => {
      copiedText.style.display = 'none';
    });
  });
}
// // Show the dialog
// const dialog = document.getElementById('myDialog');
// dialog.style.display = 'block';
// // Close the dialog after 1.5 seconds if the close button is not pressed
// setTimeout(() => {
//   if (dialog.style.display === 'block') {
//     dialog.style.display = 'none';
//   }
// }, 1500);
// // Close the dialog when the close button is clicked
// document.getElementById('dialog-close').addEventListener('click', () => {
//   dialog.style.display = 'none';
// });

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
  let scrollProgress = document.getElementById('scrollProgress');
  let maxScrollHeight =
    document.documentElement.scrollHeight - window.innerHeight;
  var scrolledPercentage = (window.scrollY / maxScrollHeight) * 100;
  scrollProgress.value = scrolledPercentage;
});
//*? Togggle switch color mode ------------------------------------------------- */

function toggleColorMode() {
  let switchColor = document.getElementById('switch-color-mode');
  const elementsLights = document.querySelectorAll(
    'body, header, nav, article, footer'
  );
  const elementsDark = document.querySelectorAll('main,.grid-container');
  console.log('switchColor: ', switchColor.checked);
  if (switchColor.checked === true) {
    elementsLights.forEach((element) => {
      element.classList.add('light-mode');
      element.classList.remove('dark-mode');
    });
    elementsDark.forEach((element) => {
      element.classList.add('dark-mode');
      element.classList.remove('light-mode');
    });
  } else {
    elementsLights.forEach((element) => {
      element.classList.add('dark-mode');
      element.classList.remove('light-mode');
    });
    elementsDark.forEach((element) => {
      element.classList.remove('dark-mode');
      element.classList.add('light-mode');
    });
  }
}

const switchColor = document.getElementById('switch-color-mode');
switchColor.addEventListener('change', toggleColorMode);
