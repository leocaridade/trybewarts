const email = document.getElementById('email');
const senha = document.getElementById('senha');
const btn = document.getElementById('form-btn');
const agreement = document.getElementById('agreement');
const submitBtn = document.getElementById('submit-btn');

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
  if(agreement.checked === true){
    submitBtn.disabled = false;
  } else{
    submitBtn.disabled = true;
  }
};

btn.addEventListener('click', login);
agreement.addEventListener('click', submitForm);

