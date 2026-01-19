// === ELEMENTOS ===
const filtro = document.getElementById("filtroTiempo");
const btnFiltrar = document.getElementById("btnFiltrar");
const tbody = document.querySelector("tbody");
const totalBox = document.getElementById("totalIngresos");

// === DATOS SIMULADOS ===
let reportes = [
  {
    proyecto: "Web corporativa",
    cliente: "Empresa X",
    estado: "Finalizado",
    ingresos: 3200,
    fecha: "2026-01-05",
  },
  {
    proyecto: "E-commerce",
    cliente: "Tienda Y",
    estado: "En proceso",
    ingresos: 1500,
    fecha: "2025-12-10",
  },
  {
    proyecto: "Landing page",
    cliente: "Startup Z",
    estado: "Finalizado",
    ingresos: 900,
    fecha: "2025-10-15",
  },
];

// === PINTAR TABLA ===
function renderTabla(lista) {
  tbody.innerHTML = "";
  let total = 0;

  lista.forEach((r) => {
    total += r.ingresos;

    tbody.innerHTML += `
      <tr>
        <td>${r.proyecto}</td>
        <td>${r.cliente}</td>
        <td>${r.estado}</td>
        <td>$${r.ingresos}</td>
      </tr>
    `;
  });

  totalBox.textContent = "$" + total;
}

// === FILTRAR ===
btnFiltrar.onclick = () => {
  const opcion = filtro.options[filtro.selectedIndex].text;
  const hoy = new Date();

  let filtrados = reportes.filter((r) => {
    const fecha = new Date(r.fecha);

    if (opcion === "Todos") {
      return true; // no filtra nada
    }

    if (opcion === "Este mes") {
      return (
        fecha.getMonth() === hoy.getMonth() &&
        fecha.getFullYear() === hoy.getFullYear()
      );
    }

    if (opcion === "Últimos 3 meses") {
      const tresMeses = new Date();
      tresMeses.setMonth(hoy.getMonth() - 3);
      return fecha >= tresMeses;
    }

    if (opcion === "Este año") {
      return fecha.getFullYear() === hoy.getFullYear();
    }
  });

  renderTabla(filtrados);
};

// === INICIAL ===
renderTabla(reportes);
