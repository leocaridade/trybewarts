const email = document.getElementById('email');
const senha = document.getElementById('senha');
const btn = document.getElementById('form-btn');
const inputName = document.getElementById('input-name');
const inputLastName = document.getElementById('input-lastname');
const inputEmail = document.getElementById('input-email');
const house = document.getElementById('house');
const family = document.getElementsByClassName('family');
const agreement = document.getElementById('agreement');
const submitBtn = document.getElementById('submit-btn');
const textArea = document.getElementById('textarea');
const counter = document.getElementById('counter');
const formDataText = document.getElementById('form-data-text');
counter.innerText = 500;

const login = () => {
  const emailLogin = email.value;
  const senhaLogin = senha.value;
  if (emailLogin === 'tryber@teste.com' && senhaLogin === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
};

const submitForm = () => {
  if (agreement.checked === true) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
};

const getFamily = () => {
  for (let index = 0; index < family.length; index += 1) {

    if (family[index].checked) {
      return family[index].value;
    }

  }
};

btn.addEventListener('click', login);
agreement.addEventListener('click', submitForm);

textArea.addEventListener('keyup', () => {
  const caracteres = textArea.value.split('');
  counter.innerText = 500 - caracteres.length;
});

submitBtn.addEventListener('click', (event) => {
  event.preventDefault();
  getFamily();
});
