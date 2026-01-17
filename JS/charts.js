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

function animateValue(id, start, end, duration){
  let range = end - start;
  let current = start;
  let increment = end > start ? 1 : -1;
  let stepTime = Math.abs(Math.floor(duration / range));

  let obj = document.getElementById(id);
  let timer = setInterval(() => {
    current += increment;
    obj.textContent = id === "ventas" ? "$" + current : current;
    if(current == end){
      clearInterval(timer);
    }
  }, stepTime);
}

animateValue("ventas",0,3200,1000);
animateValue("usuarios",0,245,1000);
animateValue("proyectos",0,12,1000);
