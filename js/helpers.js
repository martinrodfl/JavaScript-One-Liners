//*? IIFE position page in top ---------------------------------------------- */
(function () {
  window.onload = function () {
    window.scrollTo(0, 0);
  };
})();

//*? Copy code to clipboard ------------------------------------------------- */

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

//*? Change arrow class ------------------------------------------------------ */

var codeDetails = document.querySelectorAll('.details');

codeDetails.forEach(function (details) {
  var arrowIcon = details.querySelector('.bx');
  console.log(details.open);
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

// function toggleSummaryText(event) {
//   var details = event.target.closest('details');
//   var isOpen = !details.open;
//   console.log('isOpen:', isOpen);

//   if (isOpen) {
//     details.querySelector('summary h5').innerText = '<Hide code />';
//   } else {
//     details.querySelector('summary h5').innerText = '<See code />';
//   }
// }
