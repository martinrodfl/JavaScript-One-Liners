//?---------------------------- 1 */

const js1 =
  'const capitalize = (str) => `${str.charAt(0).toUpperCase()}${str.slice(1)};';

document.getElementById('js1').innerHTML = js1;

//?---------------------------- 2 */

const js2 = `//* Original *//
const calculatePercent = (value, total) => Math.round((value / total) * 100)

//* My Implementation *//
const calculate = (inputValueNumber, inputPercentageNumber) => {return (inputValueNumber * inputPercentageNumber) / 100};`;

document.getElementById('js2').innerHTML = js2;

//?---------------------------- 3 */

const js3 = `//* Original *//

const getRandomItem = (items) =>  items[Math.floor(Math.random() * items.length)];


//* My Implementation *//

items = array to be entered

function randomItem() {
  const itemsCopy = [...items];
  const filteredItems = itemsCopy.filter((item) => item !== lastSelectedItem);
  const getRandomItem =
    filteredItems[Math.floor(Math.random() * filteredItems.length)];
  lastSelectedItem = getRandomItem;
  document.getElementById('resultRandom').innerHTML = getRandomItem;
}
`;

document.getElementById('js3').innerHTML = js3;

//?---------------------------- 4 */

const js4 = 'const removeDuplicates = (items) => [...new Set(items)];';

document.getElementById('js4').innerHTML = js4;

//?---------------------------- 5 */

const js5 =
  'const sortBy = (arr, key) => arr.sort((a, b) => a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0);';

document.getElementById('js5').innerHTML = js5;

//?---------------------------- 6 */

const js6 = `//* Original *//
const isEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b);

//* My Implementation *//
let isEqual = value1 === value3 && value2 === value4;
  resultEquals.textContent = isEqual ? 'EQUALS' : 'NOT EQUALS';`;

document.getElementById('js6').innerHTML = js6;

//?---------------------------- 7 */

const js7 = `//* Original *//
const countOccurrences = (arr, value) =>
  arr.reduce((a, v) => (v === value ? a + 1 : a), 0);

//* My Implementation *//
const countOccurrences = (arr, value) =>
  arr.reduce((a, v) => (v === value ? a + 1 : a), 0);

  function HandleOcurrences() {
    if (selectedRadioOcurrencesId === 'Yes') {
      document.getElementById('result-Ocurrences').innerHTML = countOccurrences(
        ['Yes', 'Yes', 'No', 'Yes', 'No', 'No', 'Yes'],
        'Yes'
      );
    } else {
      document.getElementById('result-Ocurrences').innerHTML = countOccurrences(
        ['Yes', 'Yes', 'No', 'Yes', 'No', 'No', 'Yes'],
        'No'
      );
    }
  }
`;

document.getElementById('js7').innerHTML = js7;

//?---------------------------- 8 */

const js8 = `//* Original *//
const wait = async (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));
wait(2000).then(() => yourFunction());

//* My Implementation *//
const wait = async (milliseconds) =>
  new Promise((resolve) => setTimeout(resolve, milliseconds));

function startTimer() {
  const secondsInput = document.getElementById('seconds');
  const waitSeconds = document.getElementById('result-seconds');
  const seconds = parseInt(secondsInput.value);

  if (isNaN(seconds) || seconds <= 0) {
    alert('Please enter a valid number of seconds');
    return;
  }

  let countdown = seconds * 1000;

  const timer = setInterval(() => {
    waitSeconds.textContent = countdown;
    countdown -= 100;

    if (countdown < 0) {
      clearInterval(timer);
      showMessage();
    }
  }, 100);
}

function showMessage() {
  const resultSeconds = document.getElementById('result-seconds');
  resultSeconds.textContent = 'Finished!';
}
`;

document.getElementById('js8').innerHTML = js8;

//?---------------------------- 9 */

const js9 = '';

document.getElementById('js9').innerHTML = js9;

//?---------------------------- 10 */

const js10 = '';

document.getElementById('js10').innerHTML = js10;
