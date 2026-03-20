// Dark Mode Toggle
function toggleTheme() {
  document.body.classList.toggle('dark');
  const btn = document.getElementById('themeBtn');
  if (document.body.classList.contains('dark')) {
    btn.textContent = '☀️ Light';
  } else {
    btn.textContent = '🌙 Dark';
  }
}

// Notifications Toggle
function toggleNotif() {
  const box = document.getElementById('notifBox');
  box.classList.toggle('hidden');
}

// Color Theme Change
function changeColor(color) {
  document.documentElement.style.setProperty('--primary', color);
  document.querySelectorAll('.sidebar').forEach(el => el.style.background = color);
  document.querySelectorAll('.notice-item').forEach(el => el.style.borderLeftColor = color);
}

// Attendance Chart
const attendanceCtx = document.getElementById('attendanceChart');
if (attendanceCtx) {
  new Chart(attendanceCtx, {
    type: 'doughnut',
    data: {
      labels: ['Present', 'Absent'],
      datasets: [{
        data: [42, 8],
        backgroundColor: ['#11998e', '#e74c3c'],
        borderWidth: 0
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { position: 'bottom' }
      }
    }
  });
}

// Marks Chart
const marksCtx = document.getElementById('marksChart');
if (marksCtx) {
  new Chart(marksCtx, {
    type: 'bar',
    data: {
      labels: ['Maths', 'Physics', 'CS', 'English', 'Chemistry'],
      datasets: [{
        label: 'Marks',
        data: [95, 75, 95, 80, 65],
        backgroundColor: [
          '#0f3460', '#8e2de2', '#11998e', '#f7971e', '#e74c3c'
        ],
        borderRadius: 8
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false }
      },
      scales: {
        y: { beginAtZero: true, max: 100 }
      }
    }
  });
}