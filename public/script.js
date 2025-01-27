// DOM Elements
const showRegisterBtn = document.getElementById('showRegisterBtn');
const showLoginBtn = document.getElementById('showLoginBtn');
const registerContainer = document.getElementById('registerContainer');
const loginContainer = document.getElementById('loginContainer');

// Initially show "Register" form, hide "Login"
registerContainer.classList.remove('hidden');
loginContainer.classList.add('hidden');

// Toggle between Register and Login forms
showRegisterBtn.addEventListener('click', () => {
  registerContainer.classList.remove('hidden');
  loginContainer.classList.add('hidden');

  // Toggle active button styles
  showRegisterBtn.classList.add('active');
  showLoginBtn.classList.remove('active');
});

showLoginBtn.addEventListener('click', () => {
  registerContainer.classList.add('hidden');
  loginContainer.classList.remove('hidden');

  // Toggle active button styles
  showRegisterBtn.classList.remove('active');
  showLoginBtn.classList.add('active');
});

// Handle Register
document.getElementById('registerForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const username = document.getElementById('regUsername').value;
  const email = document.getElementById('regEmail').value;
  const password = document.getElementById('regPassword').value;

  try {
    const response = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, email, password })
    });

    const data = await response.json();
    const messageElem = document.getElementById('registerMessage');

    if (response.ok) {
      messageElem.style.color = '#8BBF45'; // ярко-зеленый при успехе
      messageElem.textContent = data.message;
    } else {
      messageElem.style.color = '#B2321C'; // красный при ошибке
      messageElem.textContent = data.message;
    }
  } catch (error) {
    console.error('Error:', error);
  }
});

// Handle Login
document.getElementById('loginForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  try {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();
    const messageElem = document.getElementById('loginMessage');

    if (response.ok) {
      messageElem.style.color = '#8BBF45'; // ярко-зеленый при успехе
      messageElem.textContent = data.message;

      // Optionally store the token
      if (data.token) {
        localStorage.setItem('token', data.token);
      }
    } else {
      messageElem.style.color = '#B2321C'; // красный при ошибке
      messageElem.textContent = data.message;
    }
  } catch (error) {
    console.error('Error:', error);
  }
});
