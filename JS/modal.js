// === CONTROL MODAL ===
const modal = document.getElementById("modalUsuario");
const btnNuevo = document.getElementById("btnNuevoUsuario");
const cerrar = document.getElementById("cerrarModal");

btnNuevo.onclick = () => (modal.style.display = "flex");
cerrar.onclick = () => (modal.style.display = "none");

// === DATOS ===
let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

// === PINTAR TABLA ===
function renderTabla() {
  const tbody = document.getElementById("tablaUsuarios");
  tbody.innerHTML = "";

  usuarios.forEach((u, index) => {
    tbody.innerHTML += `
      <tr>
        <td>${u.nombre}</td>
        <td>${u.correo}</td>
        <td>${u.rol}</td>
        <td>
          <button class="btn-delete" onclick="eliminarUsuario(${index})">
            Eliminar
          </button>
        </td>
      </tr>
    `;
  });
}

// === ELIMINAR ===
function eliminarUsuario(i) {
  if (!confirm("¿Eliminar usuario?")) return;

  usuarios.splice(i, 1);
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  renderTabla();
}

// === GUARDAR ===
document.getElementById("btnGuardar").onclick = () => {
  const nombre = document.getElementById("nombre").value;
  const correo = document.getElementById("correo").value;
  const rol = document.getElementById("rol").value;

  if (!nombre || !correo) return alert("Completa los campos");

  usuarios.push({ nombre, correo, rol });
  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  modal.style.display = "none";
  renderTabla();

  // limpiar
  nombre.value = "";
  correo.value = "";
};

// inicial
renderTabla();
