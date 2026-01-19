// ================================
// SELECCIÓN DE ELEMENTOS HTML
// ================================

// Select donde eliges el rango de tiempo
const filtro = document.getElementById("filtroTiempo");

// Botón para aplicar filtro
const btnFiltrar = document.getElementById("btnFiltrar");

// Cuerpo de la tabla
const tbody = document.querySelector("tbody");

// Donde se mostrará el total de ingresos
const totalBox = document.getElementById("totalIngresos");


// ================================
// DATOS SIMULADOS (FAKE BACKEND)
// ================================

let reportes = [
  {
    proyecto: "Web corporativa",
    cliente: "Empresa X",
    estado: "Finalizado",
    ingresos: 3200,
    fecha: "2026-01-05", // formato ISO
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


// ================================
// FUNCIÓN PARA PINTAR TABLA
// ================================

function renderTabla(lista) {

  // Limpia tabla antes de volver a pintar
  tbody.innerHTML = "";

  // Variable acumuladora de ingresos
  let total = 0;

  // Recorre cada reporte
  lista.forEach((r) => {

    // Suma ingresos
    total += r.ingresos;

    // Inserta fila en la tabla
    tbody.innerHTML += `
      <tr>
        <td>${r.proyecto}</td>
        <td>${r.cliente}</td>
        <td>${r.estado}</td>
        <td>$${r.ingresos}</td>
      </tr>
    `;
  });

  // Muestra total calculado
  totalBox.textContent = "$" + total;
}


// ================================
// EVENTO FILTRAR
// ================================

btnFiltrar.onclick = () => {

  // Obtiene texto del select
  const opcion = filtro.options[filtro.selectedIndex].text;

  // Fecha actual
  const hoy = new Date();

  // Filtra según opción seleccionada
  let filtrados = reportes.filter((r) => {

    // Convierte string a fecha real
    const fecha = new Date(r.fecha);

    // --- OPCIÓN: TODOS ---
    if (opcion === "Todos") {
      return true; // no filtra nada
    }

    // --- OPCIÓN: ESTE MES ---
    if (opcion === "Este mes") {
      return (
        fecha.getMonth() === hoy.getMonth() &&
        fecha.getFullYear() === hoy.getFullYear()
      );
    }

    // --- OPCIÓN: ÚLTIMOS 3 MESES ---
    if (opcion === "Últimos 3 meses") {

      // Fecha hace 3 meses
      const tresMeses = new Date();
      tresMeses.setMonth(hoy.getMonth() - 3);

      return fecha >= tresMeses;
    }

    // --- OPCIÓN: ESTE AÑO ---
    if (opcion === "Este año") {
      return fecha.getFullYear() === hoy.getFullYear();
    }
  });

  // Pinta tabla filtrada
  renderTabla(filtrados);
};


// ================================
// RENDER INICIAL
// ================================

// Muestra todos al cargar
renderTabla(reportes);
