// VENTAS
const ctxVentas = document.getElementById('chartVentas');

new Chart(ctxVentas, {
  type: 'line',
  data: {
    labels: ['Ene','Feb','Mar','Abr','May','Jun'],
    datasets: [{
      label: 'Ventas',
      data: [1200, 1900, 3000, 2500, 2200, 3200],
      borderWidth: 2,
      tension: .4
    }]
  }
});

// USUARIOS
const ctxUsuarios = document.getElementById('chartUsuarios');

new Chart(ctxUsuarios, {
  type: 'bar',
  data: {
    labels: ['Lun','Mar','Mie','Jue','Vie'],
    datasets: [{
      label: 'Usuarios activos',
      data: [50, 80, 65, 90, 120],
      borderWidth: 2
    }]
  }
});


const ctx = document.getElementById('salesChart');

new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Ene','Feb','Mar','Abr','May','Jun'],
    datasets: [{
      label: 'Ventas',
      data: [0, 0, 0, 0, 0, 0],
      borderWidth: 2
    }]
  }
});

