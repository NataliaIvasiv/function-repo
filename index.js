const input = document.querySelector('[id="name-input"]');
const output = document.querySelector('[id="name-output"]');

input.addEventListener('input', e => {
  let outputValue = e.currentTarget.value.trim();
  if (!outputValue) {
    return (output.textContent = 'Anonymous');
  } else {
    return (output.textContent = outputValue);
  }
});
