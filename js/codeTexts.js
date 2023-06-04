//?---------------------------- 1 */

const js1 =
  'const capitalize = (str) => `${str.charAt(0).toUpperCase()}${str.slice(1)};';

document.getElementById('js1').innerHTML = js1;

//?---------------------------- 2 */

const js2 = `//* My Implementation *//
const calculate = (inputValueNumber, inputPercentageNumber) => {return (inputValueNumber * inputPercentageNumber) / 100};`;

document.getElementById('js2').innerHTML = js2;

//?---------------------------- 3 */

const js3 = `const getRandomItem = (items) =>  items[Math.floor(Math.random() * items.length)];`;

document.getElementById('js3').innerHTML = js3;

//?---------------------------- 4 */

const js4 = 'const removeDuplicates = (items) => [...new Set(items)];';

document.getElementById('js4').innerHTML = js4;

//?---------------------------- 5 */

const js5 =
  'const sortBy = (arr, key) => arr.sort((a, b) => a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0);';

document.getElementById('js5').innerHTML = js5;

//?---------------------------- 6 */

const js6 = `//* My Implementation *//
let isEqual = value1 === value3 && value2 === value4;
  resultEquals.textContent = isEqual ? 'EQUALS' : 'NOT EQUALS';`;

document.getElementById('js6').innerHTML = js6;

//?---------------------------- 7 */

const js7 = '';

document.getElementById('js7').innerHTML = js7;

//?---------------------------- 8 */

const js8 = '';

document.getElementById('js8').innerHTML = js8;

//?---------------------------- 9 */

const js9 = '';

document.getElementById('js9').innerHTML = js9;

//?---------------------------- 10 */

const js10 = '';

document.getElementById('js10').innerHTML = js10;
