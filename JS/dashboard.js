// =====================
// CHART: USUARIOS (dashboard)
// =====================
const ctxUsers = document.getElementById('usersChart');

if (ctxUsers) {
  new Chart(ctxUsers, {
    type: 'line',
    data: {
      labels: ['Ene','Feb','Mar','Abr','May','Jun'],
      datasets: [{
        label: 'Usuarios',
        data: [120, 190, 300, 250, 420, 380],
        borderWidth: 2,
        tension: 0.4
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false }
      }
    }
  });
}
