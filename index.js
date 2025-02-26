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

const form = document.querySelector('.login-form');
//console.log(form);

form.addEventListener('submit', submitHandler);
function submitHandler(e) {
  e.preventDefault();
  const email = e.target.elements.email.value;
  const password = e.target.elements.password.value;
  let objectName = {};
  if (email === '' || password === '') {
    alert('fill in!');
  } else {
    objectName.login = email;
    objectName.keyWord = password;
    console.log(objectName);
  }
  e.target.reset;
}
