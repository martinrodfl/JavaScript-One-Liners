//todo 1. How to Capitalize Text -------------------------------------------  */
function CapitalizeWord() {
  let inputValueText;
  inputValueText = document.getElementById('inputText').value.toLowerCase();
  let capitalizedWord =
    inputValueText.charAt(0).toUpperCase() + inputValueText.slice(1);

  document.getElementById('resultText').innerHTML = capitalizedWord;
}

//todo 2. How to Calculate Percent ------------------------------------------- */
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
//todo  3. How to Get a Random Element ------------------------------------------- */
var items = [
  'Martin',
  'Andrea',
  'Carlos',
  'Sandra',
  'Pedro',
  'Maria',
  'Juan',
  'Patricia',
];

function HandleCheckboxChange(checkboxId) {
  let checkboxes = document.getElementsByName('group');
  checkboxes.forEach(function (checkbox) {
    checkbox.checked = checkbox.id === checkboxId;
  });

  if (checkboxId === 'Names') {
    items = [
      'Martin',
      'Andrea',
      'Carlos',
      'Sandra',
      'Pedro',
      'Maria',
      'Juan',
      'Patricia',
    ];
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

//todo 4. How to Remove Duplicate Elements -------------------------------------------  */
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
      '0',
      '0',
      '1',
      '2',
      '3',
      '4',
      '5',
      '5',
      '6',
      '7',
      '8',
      '8',
      '9',
    ];
  } else if (checkboxId === 'Colors-Duplicates') {
    itemsDuplicates = [
      'Blue',
      'Blue',
      'White',
      'Red',
      'Green',
      'Green',
      'Gray',
      'Pink',
      'Pink',
    ];
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

//todo 5. How to Sort Elements By Certain Property -------------------------------------------  */
let lessons = [
  {
    position: 0,
    name: 'Intro',
    duration: 18,
  },
  {
    position: 1,
    name: 'Basics',
    duration: 12,
  },
  {
    position: 2,
    name: 'Advanced',
    duration: 15,
  },
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

//todo 6. How to Check if Arrays/Objects are Equal ----------------------------------  */

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

const inputObject = `<p>{ </p>
<input type="text" id="obj1" class="input-equals" placeholder="a" required />
<p>, </p>
<input type="text" id="obj2" class="input-equals" placeholder="a" required />
<p> }</p>
<p> === </p>
<p>{ </p>
<input type="text" id="obj3" class="input-equals" placeholder="b" required />
<p>, </p>
<input type="text" id="obj4" class="input-equals" placeholder="b" required />
<p> }</p>`;

const inputArray = `<p> [ </p>
<input type="text" id="arr1" class="input-equals" placeholder="a" required />
<p>, </p>
<input type="text" id="arr2" class="input-equals" placeholder="a" required />
<p> ]</p>
<p>  ===  </p>
<p>[ </p>
<input type="text" id="arr3" class="input-equals" placeholder="b" required />
<p>, </p>
<input type="text" id="arr4" class="input-equals" placeholder="b" required />
<p> ]</p>`;

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

  let isEqual = value1 === value3 && value2 === value4;
  resultEquals.textContent = isEqual ? 'EQUALS' : 'NOT EQUALS';
}

ShowObject();

//todo 7. How to Count Number of Occurrences ----------------------------------  */

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

//todo 8. How to Wait for a Certain Amount of Time ----------------------------------  */

const wait = async (milliseconds) =>
  new Promise((resolve) => setTimeout(resolve, milliseconds));

document.getElementById('result-seconds').innerText = 0;
const btnseconds = document.getElementById('btnseconds');

function startStopContinueTimer() {
  const secondsInput = document.getElementById('seconds');
  const waitSeconds = document.getElementById('result-seconds');
  waitSeconds.classList.add('green-color');
  btnseconds.classList.remove('btn-exercise');
  btnseconds.classList.add('orange-color');
  const seconds = parseInt(secondsInput.value);

  if (isNaN(seconds) || seconds <= 0) {
    waitSeconds.textContent = 'Please enter a valid number of seconds!';
    return;
  }

  if (startStopContinueTimer.timer) {
    // El temporizador está en marcha, se detiene
    btnseconds.classList.remove('orange-color');
    btnseconds.classList.add('btn-exercise');
    clearInterval(startStopContinueTimer.timer);
    startStopContinueTimer.timer = null;
    return;
  }

  if (
    !startStopContinueTimer.startTime ||
    startStopContinueTimer.elapsedTime >= startStopContinueTimer.countdown
  ) {
    // El temporizador no se ha iniciado previamente o ya ha alcanzado el tiempo límite
    startStopContinueTimer.startTime = Date.now();
    startStopContinueTimer.elapsedTime = 0;
    startStopContinueTimer.countdown = seconds * 1000;
  } else {
    // El temporizador se ha detenido previamente, se reanuda desde el tiempo en que se detuvo
    startStopContinueTimer.startTime =
      Date.now() - startStopContinueTimer.elapsedTime;
  }

  startStopContinueTimer.timer = setInterval(() => {
    const currentTime = Date.now();
    startStopContinueTimer.elapsedTime =
      currentTime - startStopContinueTimer.startTime;
    waitSeconds.textContent =
      startStopContinueTimer.countdown - startStopContinueTimer.elapsedTime;

    if (
      startStopContinueTimer.elapsedTime >= startStopContinueTimer.countdown
    ) {
      clearInterval(startStopContinueTimer.timer);
      startStopContinueTimer.timer = null;
      btnseconds.classList.remove('orange-color');
      btnseconds.classList.add('btn-exercise');
      showMessage();
    }
  }, 100);
}

function resetTimer() {
  const waitSeconds = document.getElementById('result-seconds');
  clearInterval(startStopContinueTimer.timer);
  startStopContinueTimer.timer = null;
  waitSeconds.textContent = '0';
}

function showMessage() {
  const resultSeconds = document.getElementById('result-seconds');
  resultSeconds.classList.remove('green-color');
  resultSeconds.textContent = 'Finished!';
}
