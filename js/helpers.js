//*? IIFE position page in top ---------------------------------------------- */
// (function () {
//   window.onload = function () {
//     window.scrollTo(0, 0);
//   };
// })();

window.addEventListener('scroll', function () {
  let maxScrollHeight =
    document.documentElement.scrollHeight - window.innerHeight;
  var scrolledPercentage = (window.scrollY / maxScrollHeight) * 100;
  scrollProgress.value = scrolledPercentage;
  const arrowToTop = document.getElementById('scrollToTop');
  // console.log(scrolledPercentage);
  if (scrolledPercentage > 10) {
    arrowToTop.classList.remove('hiden');
  } else {
    arrowToTop.classList.add('hiden');
  }
});

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

  // console.log(clickedElementId);
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
  // console.log('switchColor: ', switchColor.checked);
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
