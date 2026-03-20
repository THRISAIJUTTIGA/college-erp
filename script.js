let selectedRole = 'student';

const users = {
  student: { id: '24pa1a05a2', password: 'Vamsi@99' },
  teacher: { id: 'TEA001', password: '5678' }
};

function selectRole(role) {
  selectedRole = role;
  document.querySelectorAll('.role-btn').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
  document.getElementById('username').placeholder = 
    role === 'student' ? 'Enter Student ID' : 'Enter Teacher ID';
}

function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const user = users[selectedRole];

  if (username === user.id && password === user.password) {
    if (selectedRole === 'student') {
      window.location.href = 'dashboard.html';
    } else {
      window.location.href = 'teacher.html';
    }
  } else {
    document.getElementById('error-msg').textContent = '❌ Wrong ID or Password! Try again.';
  }
}