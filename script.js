const email = document.getElementById('email');
const senha = document.getElementById('senha');
const btn = document.getElementById('form-btn');

const login = () => {
  const emailLogin = email.value;
  const senhaLogin = senha.value;
  if (emailLogin === 'tryber@teste.com' && senhaLogin === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
};

btn.addEventListener('click', login);
