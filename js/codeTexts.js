//?---------------------------- 1 */

const js1 = `//* Original *//`;
const js1_2 =
  'const capitalize = (str) => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;';

const js1_3 = `
//* -------------- My Implementation -------------- *//
function capitalizeWord() {
  const inputValueText = document.getElementById('inputText').value;
  if (!inputValueText) {
    document.getElementById('resultText').textContent = 'Complete the field';
    return;
  }
  const capitalizedWord =
    inputValueText.charAt(0).toUpperCase() +
    inputValueText.slice(1).toLowerCase();

  document.getElementById('resultText').textContent = capitalizedWord;
}
`;

document.getElementById('js1').innerHTML = `${js1}
${js1_2}

${js1_3}`;

//?---------------------------- 2 */

const js2 = `//* Original *//
const calculatePercent = (value, total) => Math.round((value / total) * 100)


//* ---------------- My Implementation ---------------- *//

function CalculatePercent() {
  let inputPercentageNumber = document.getElementById(
    'inputPercentageNumber'
  ).value;
  let inputValueNumber = document.getElementById('inputValueNumber').value;

  const calculate = (inputValueNumber, inputPercentageNumber) => {
    return (inputValueNumber * inputPercentageNumber) / 100;
  };

  if (!inputPercentageNumber || !inputValueNumber) {
    document.getElementById('resultPercentage').textContent =
      'Complete both fields';
    return;
  }

  document.getElementById('resultPercentage').innerHTML = calculate(
    inputPercentageNumber,
    inputValueNumber
  );
}
`;

document.getElementById('js2').innerHTML = js2;

//?---------------------------- 3 */

const js3 = `//* Original *//

const getRandomItem = (items) =>  items[Math.floor(Math.random() * items.length)];


//* ---------------- My Implementation ---------------- *//

var items = ['Martin','Andrea','Carlos','Sandra','Pedro','Maria','Juan','Patricia'];

function HandleCheckboxChange(checkboxId) {
  let checkboxes = document.getElementsByName('group');
  checkboxes.forEach(function (checkbox) {
    checkbox.checked = checkbox.id === checkboxId;
  });

  if (checkboxId === 'Names') {
    items = ['Martin','Andrea', 'Carlos', 'Sandra', 'Pedro','Maria', 'Juan','Patricia'];
  } else if (checkboxId === 'Numbers') {
    items = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  } else if (checkboxId === 'Colors') {
    items = ['Blue', 'White', 'Red', 'Green', 'Gray', 'Pink'];
  }

  showSelectedCheckboxId();
  return checkboxId;
}

function showSelectedCheckboxId() {
  let checkboxes = document.getElementsByName('group');
  let selectedCheckboxId = '';
  checkboxes.forEach(function (checkbox) {
    if (checkbox.checked) {
      selectedCheckboxId = checkbox.id;
    }
  });
  document.getElementById('selectedCheckboxId').innerHTML = selectedCheckboxId;
}

let lastSelectedItem = '';

function randomItem() {
  const itemsCopy = [...items];
  const filteredItems = itemsCopy.filter((item) => item !== lastSelectedItem);
  const getRandomItem =
    filteredItems[Math.floor(Math.random() * filteredItems.length)];
  lastSelectedItem = getRandomItem;
  document.getElementById('resultRandom').innerHTML = getRandomItem;
}

showSelectedCheckboxId();
`;

document.getElementById('js3').innerHTML = js3;

//?---------------------------- 4 */

const js4 = `//* Original *//
const removeDuplicates = (items) => [...new Set(items)];


//* ---------------- My Implementation ---------------- *//

let itemsDuplicates = ['Martin', 'Martin', 'Maria', 'Juan', 'Andrea', 'Andrea'];
var selectedCheckboxId = '';

function HandleCheckboxRepeat(checkboxId) {
  const checkboxes = document.getElementsByName('group2');
  checkboxes.forEach(function (checkbox) {
    checkbox.checked = checkbox.id === checkboxId;
  });
  if (checkboxId === 'Names-Duplicates') {
    itemsDuplicates = itemsDuplicates;
  } else if (checkboxId === 'Numbers-Duplicates') {
    itemsDuplicates = [
      '0','0','1','2','3','4','5','5','6','7','8', '8','9'];
  } else if (checkboxId === 'Colors-Duplicates') {
    itemsDuplicates = ['Blue','Blue','White','Red','Green','Green','Gray','Pink','Pink'];
  }
  showSelectedCheckboxIdRepeat();
  return checkboxId;
}

function removeHyphen(string) {
  const hyphenIndex = string.indexOf('-');
  if (hyphenIndex !== -1) {
    string = string.slice(0, hyphenIndex) + ' ' + string.slice(hyphenIndex + 1);
  }
  return string;
}

function showSelectedCheckboxIdRepeat() {
  const checkboxes = document.getElementsByName('group2');
  selectedCheckboxId = '';
  checkboxes.forEach(function (checkbox) {
    if (checkbox.checked) {
      selectedCheckboxId = checkbox.id;
    }
  });
  document.getElementById('selectedCheckboxIdDuplicates').innerHTML =
    removeHyphen(selectedCheckboxId);
}

let initName = selectedCheckboxId;

function NoRepeatItems() {
  if (itemsDuplicates === '') {
    alert('You must select a checkbox');
    return;
  }

  const removeDuplicates = (items) => [...new Set(items)];
  document.getElementById('result-Duplicates').innerHTML =
    removeDuplicates(itemsDuplicates);
}

showSelectedCheckboxIdRepeat();
   `;

document.getElementById('js4').innerHTML = js4;

//?---------------------------- 5 */

const js5 = `//* Original *//
  const sortBy = (arr, key) => arr.sort((a, b) => a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0);
  

//* ---------------- My Implementation ---------------- *//
  
let lessons = [
  {position: 0,name: 'Intro',duration: 18,},
  {position: 1,name: 'Basics',duration: 12,},
  {position: 2,name: 'Advanced',duration: 15,},
];

let selectedRadioId = 'position';

function HandleRadioChecked() {
  const radios = document.getElementsByName('group3');
  radios.forEach(function (radio) {
    if (radio.checked) {
      selectedRadioId = radio.id;
    }
  });

  document.getElementById('selectedRadioSortedId').innerHTML = selectedRadioId;
}

function SortLessons() {
  if (selectedRadioId === '') {
    alert('You must select a radio button');
    return;
  }

  let sortedLessons = lessons.sort((a, b) =>
    a[selectedRadioId] > b[selectedRadioId]
      ? 1
      : a[selectedRadioId] < b[selectedRadioId]
      ? -1
      : 0
  );

  let result = document.getElementById('result-Sort');
  result.innerHTML = '';

  let ul = document.createElement('ul');
  sortedLessons.forEach(function (lesson) {
    let li = document.createElement('li');
    li.textContent = JSON.stringify(lesson);
    ul.appendChild(li);
  });

  result.appendChild(ul);
}

HandleRadioChecked();
  `;

document.getElementById('js5').innerHTML = js5;

//?---------------------------- 6 */

const js6 = `//* Original *//
const isEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b);


//* ---------------- My Implementation ---------------- *//

`;
const js6_2 = `
let selectedRadioEqualsId = 'Object';

function HandleRadioCheckedEquals() {
  const radios = document.getElementsByName('group4');
  radios.forEach(function (radio) {
    if (radio.checked) {
      selectedRadioEqualsId = radio.id;
    }
  });

  document.getElementById('selectedRadioEqualId').innerHTML =
    selectedRadioEqualsId;
}

// const inputObject =  * see in github repository  
// const inputArray =  * see in github repository  

function ShowObject() {
  HandleRadioCheckedEquals();
  let objectEqualDiv = document.querySelector('.array-object-equals');
  objectEqualDiv.innerHTML = inputObject;
}

function ShowArray() {
  HandleRadioCheckedEquals();
  let arrayEqualDiv = document.querySelector('.array-object-equals');
  arrayEqualDiv.innerHTML = inputArray;
}

function checkEquality() {
  var selectedRadio = document.querySelector('input[name="group4"]:checked').id;
  var selectedRadioEqualId = document.getElementById('selectedRadioEqualId');
  let resultEquals = document.getElementById('result-Equals');

  let value1, value2, value3, value4;

  if (selectedRadio === 'Object') {
    value1 = document.getElementById('obj1').value;
    value2 = document.getElementById('obj2').value;
    value3 = document.getElementById('obj3').value;
    value4 = document.getElementById('obj4').value;
    selectedRadioEqualId.textContent = 'Objects';
  } else if (selectedRadio === 'Array') {
    value1 = document.getElementById('arr1').value;
    value2 = document.getElementById('arr2').value;
    value3 = document.getElementById('arr3').value;
    value4 = document.getElementById('arr4').value;
    selectedRadioEqualId.textContent = 'Arrays';
  }

  if (!value1 || !value2 || !value3 || !value4) {
    resultEquals.textContent = 'All fields must be completed';
  } else {
    let isEqual = value1 === value3 && value2 === value4;
    resultEquals.textContent = isEqual ? 'EQUALS' : 'NOT EQUALS';
  }
}

ShowObject();
`;

document.getElementById('js6').innerHTML = `${js6}
${js6_2}
`;

//?---------------------------- 7 */

const js7 = `//* Original *//
const countOccurrences = (arr, value) =>
  arr.reduce((a, v) => (v === value ? a + 1 : a), 0);


//* ---------------- My Implementation ---------------- *//

const array = ['Yes', 'Yes', 'No', 'Yes', 'No', 'No', 'Yes'];
let selectedRadioOcurrencesId = 'Yes';
document.getElementById('selectedRadioOcurrencies').innerHTML =
  selectedRadioOcurrencesId;

const countOccurrences = (arr, value) =>
  arr.reduce((a, v) => (v === value ? a + 1 : a), 0);

function HandleRadioOcurrences() {
  const radios = document.getElementsByName('group5');
  radios.forEach(function (radio) {
    if (radio.checked) {
      selectedRadioOcurrencesId = radio.id;
    }
  });

  document.getElementById('selectedRadioOcurrencies').innerHTML =
    selectedRadioOcurrencesId;
}

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


//* ---------------- My Implementation ---------------- *//

const resultSeconds = document.getElementById('result-seconds');
const btnSeconds = document.getElementById('btnseconds');
const secondsInput = document.getElementById('seconds');

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
    stopTimer();
    return;
  }

  if (!startTime || elapsedTime >= countdown) {
    initializeTimer(seconds);
  } else {
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


//* ---------------- My Implementation ---------------- *//

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

const js10 = `//* Original *//
// const insert = (arr, index, newItem) => [...arr.slice(0, index),newItem,...arr.slice(index),];


//* ---------------- My Implementation ---------------- *//

const arrayToInsertItem = [
  'Ignacio',
  'Santiago',
  'Martin',
  'Javier',
  'Tatiana',
];

const insert = (arr, index, newItem) => [
  ...arr.slice(0, index),
  newItem,
  ...arr.slice(index),
];

const inputElement = document.getElementById('inputElement');
const arrPositionElement = document.getElementById('arrPosition');
const selectedInsertId = document.getElementById('selectedInsertId');
const resultInsert = document.getElementById('result-insert');

const updateSelectedInsertId = () => {
  const inputValue = inputElement.value.toString();
  const positionValue = arrPositionElement.value;
  selectedInsertId.textContent = inputValue + ' at position ' + positionValue;
};

inputElement.addEventListener('input', updateSelectedInsertId);
arrPositionElement.addEventListener('input', updateSelectedInsertId);

function insertElement() {
  const inputValue = inputElement.value;
  const positionValue = parseInt(arrPositionElement.value);

  if (!inputValue || !positionValue) {
    resultInsert.textContent = 'Both fields must be completed';
    return;
  }
  const newArray = insert(arrayToInsertItem, positionValue - 1, inputValue);
  resultInsert.textContent = newArray.join(', ');
}
`;

document.getElementById('js10').innerHTML = js10;
