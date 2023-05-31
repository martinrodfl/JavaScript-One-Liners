//* 1. How to Capitalize Text -------------------------------------------  */
function CapitalizeWord() {
  let inputValueText = document.getElementById('inputText').value;
  let capitalizedWord =
    inputValueText.charAt(0).toUpperCase() + inputValueText.slice(1);

  document.getElementById('resultText').innerHTML = capitalizedWord;
}

//* 2. How to Calculate Percent ------------------------------------------- */
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
//*  3. How to Get a Random Element ------------------------------------------- */
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
  if (items === '') {
    alert('Debes seleccionar al menos una opción');
    return;
  }

  // Copiar el array de elementos para evitar modificar el original
  const itemsCopy = [...items];

  // Filtrar el array para eliminar el último elemento seleccionado
  const filteredItems = itemsCopy.filter((item) => item !== lastSelectedItem);

  // if (filteredItems.length === 0) {
  //   // Si no hay elementos disponibles después de filtrar, mostrar un mensaje
  //   alert('Ya se han seleccionado todos los elementos disponibles');
  //   return;
  // }

  // Obtener un elemento aleatorio del array filtrado
  const getRandomItem =
    filteredItems[Math.floor(Math.random() * filteredItems.length)];

  // Actualizar el último elemento seleccionado
  lastSelectedItem = getRandomItem;

  // Mostrar el elemento seleccionado en el resultado
  document.getElementById('resultRandom').innerHTML = getRandomItem;
}
showSelectedCheckboxId();

//* 4. How to Remove Duplicate Elements -------------------------------------------  */
let itemsDuplicates = ['Martin', 'Martin', 'Maria', 'Juan', 'Andrea', 'Andrea'];
var selectedCheckboxId = '';
function HandleCheckboxRepeat(checkboxId) {
  const checkboxes = document.getElementsByName('group2');
  checkboxes.forEach(function (checkbox) {
    checkbox.checked = checkbox.id === checkboxId;
  });
  if (checkboxId === 'Names-Duplicates') {
    itemsDuplicates = ['Martin', 'Martin', 'Maria', 'Juan', 'Andrea', 'Andrea'];
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

function showSelectedCheckboxIdRepeat() {
  const checkboxes = document.getElementsByName('group2');
  selectedCheckboxId = '';
  checkboxes.forEach(function (checkbox) {
    if (checkbox.checked) {
      selectedCheckboxId = checkbox.id;
    }
  });
  document.getElementById('selectedCheckboxIdDuplicates').innerHTML =
    selectedCheckboxId;
}

let initName = selectedCheckboxId;

function NoRepeatItems() {
  if (itemsDuplicates === '') {
    alert('You must select a checkbox');
    return;
  }

  function removeAfterHyphen(string) {
    var hyphenIndex = string.indexOf('-');
    if (hyphenIndex !== -1) {
      string = string.slice(0, hyphenIndex);
    }
    return string;
  }

  const removeDuplicates = (items) => [...new Set(items)];
  document.getElementById('result-Duplicates').innerHTML =
    removeDuplicates(itemsDuplicates);
}

showSelectedCheckboxIdRepeat();

//* 5. How to Sort Elements By Certain Property -------------------------------------------  */
let lessons = [
  { position: 0, name: 'Intro', duration: 18 },
  { position: 1, name: 'Basics', duration: 12 },
  { position: 2, name: 'Advanced', duration: 15 },
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
