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
// const wait = async (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));
// wait(2000).then(() => yourFunction());

//* My Implementation *//
const resultSeconds = document.getElementById('result-seconds');
const btnSeconds = document.getElementById('btnseconds');

let timer = null;
let startTime = null;
let elapsedTime = null;
let countdown = null;

function startStopContinueTimer() {
  const waitSeconds = document.getElementById('result-seconds');

  waitSeconds.classList.add('green-color');
  btnSeconds.classList.remove('btn-exercise');
  btnSeconds.classList.add('orange-color');

  const seconds = parseInt(secondsInput.value);

  if (isNaN(seconds) || seconds <= 0) {
    waitSeconds.textContent = 'Please enter a valid number of seconds!';
    return;
  }

  if (timer) {
    // El temporizador está en marcha, se detiene
    stopTimer();
    return;
  }

  if (!startTime || elapsedTime >= countdown) {
    // El temporizador no se ha iniciado previamente o ya ha alcanzado el tiempo límite
    initializeTimer(seconds);
  } else {
    // El temporizador se ha detenido previamente, se reanuda desde el tiempo en que se detuvo
    resumeTimer();
  }

  timer = setInterval(updateTimer, 100);
}

function stopTimer() {
  btnSeconds.classList.remove('orange-color');
  btnSeconds.classList.add('btn-exercise');
  clearInterval(timer);
  timer = null;
}

function initializeTimer(seconds) {
  startTime = Date.now();
  elapsedTime = 0;
  countdown = seconds * 1000;
}

function resumeTimer() {
  startTime = Date.now() - elapsedTime;
}

function updateTimer() {
  const currentTime = Date.now();
  elapsedTime = currentTime - startTime;
  const remainingTime = countdown - elapsedTime;

  resultSeconds.textContent = remainingTime;

  if (elapsedTime >= countdown) {
    clearInterval(timer);
    timer = null;
    stopTimer();
    showMessage();
  }
}

function resetTimer() {
  btnSeconds.classList.remove('orange-color');
  btnSeconds.classList.add('btn-exercise');

  clearInterval(timer);
  timer = null;

  resultSeconds.textContent = '0';

  // Restablecer todas las variables a null
  startTime = null;
  elapsedTime = null;
  countdown = null;
}

function showMessage() {
  resultSeconds.classList.remove('green-color');
  resultSeconds.textContent = 'Finished!';
}
`;

document.getElementById('js8').innerHTML = js8;

//?---------------------------- 9 */

const js9 = `//* Original *//
// const pluck = (objs, key) => objs.map((obj) => obj[key]);
// const users = [{ name: "Abe", age: 45 }, { name: "Jennifer", age: 27 }];
// pluck(users, 'name');


//* My Implementation *//

const users = [
  { name: 'Abe', age: 45 },
  { name: 'Jennifer', age: 27 },
  { name: 'Paul', age: 31 },
];

let selectedRadioPropertyId = 'by names';
let selectedKey;

function handleRadioCheckedProperty() {
  const selectedRadioPropertyId = document.querySelector(
    'input[name="group6"]:checked'
  ).id;
  selectedKey = selectedRadioPropertyId === 'by names' ? 'name' : 'age';
  document.getElementById('selectedRadioPropertyId').textContent =
    selectedRadioPropertyId;
  document.getElementById('result-property').textContent = '';
}

const pluck = (objs, key) => objs.map((obj) => obj[key]);

function pluckProperties() {
  handleRadioCheckedProperty();
  document.getElementById('result-property').textContent = pluck(
    users,
    selectedKey
  );
}

handleRadioCheckedProperty();
`;

document.getElementById('js9').innerHTML = js9;

//?---------------------------- 10 */

const js10 = '';

document.getElementById('js10').innerHTML = js10;
