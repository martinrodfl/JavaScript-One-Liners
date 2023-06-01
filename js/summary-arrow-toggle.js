var codeDetails = document.getElementById('details-code');
var arrowIcon = codeDetails.querySelector('.bx');

codeDetails.addEventListener('toggle', function () {
  if (codeDetails.open) {
    arrowIcon.classList.remove('bxs-left-arrow', 'bx-fade-left');
    arrowIcon.classList.add('bx-up-arrow', 'bx-tada');
  } else {
    arrowIcon.classList.remove('bx-up-arrow', 'bx-tada');
    arrowIcon.classList.add('bxs-left-arrow', 'bx-fade-left');
  }
});
