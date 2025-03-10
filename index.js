// const input = document.querySelector('[id="name-input"]');
// const output = document.querySelector('[id="name-output"]');

// input.addEventListener('input', e => {
//   let outputValue = e.currentTarget.value.trim();
//   if (!outputValue) {
//     return (output.textContent = 'Anonymous');
//   } else {
//     return (output.textContent = outputValue);
//   }
// });

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// const changeBTN = document.querySelector('.change-color');
// console.log(changeBTN);
// const widget = document.querySelector('.widget');
// const color = document.querySelector('.color');

// function handleClick(event) {
//   let randomColor = getRandomHexColor();
//   widget.style.backgroundColor = randomColor;
//   console.log(randomColor);
//   color.textContent = randomColor;
// }
// changeBTN.addEventListener('click', handleClick);

const form = document.querySelector('.feedback-form');
const localStorageKey = 'goit-example-message';

form.addEventListener('input', evt => {
  localStorage.setItem(localStorageKey, evt.target.value);
});

form.addEventListener('submit', evt => {
  evt.preventDefault();
  console.log(evt.target.elements.message.value);
  form.reset();
});
