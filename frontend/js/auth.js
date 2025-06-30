function login(e) {
  e.preventDefault();
  fetch('/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: document.getElementById('username').value,
      password: document.getElementById('password').value
    })
  }).then(res => res.json())
    .then(data => {
      localStorage.setItem('token', data.token);
      alert('Logged in');
      window.location.href = 'index.html';
    });
}

function register(e) {
  e.preventDefault();
  fetch('/api/auth/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: document.getElementById('username').value,
      password: document.getElementById('password').value
    })
  }).then(res => res.json())
    .then(data => {
      alert('Registered');
      window.location.href = 'login.html';
    });
}
