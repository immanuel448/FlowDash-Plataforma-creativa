// === CONTROL MODAL ===
const modal = document.getElementById("modalUsuario");
const btnNuevo = document.getElementById("btnNuevoUsuario");
const cerrar = document.getElementById("cerrarModal");

// === DATOS ===
let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

// === DATOS POR DEFECTO ===
if (usuarios.length === 0) {
  usuarios = [
    { nombre: "Immanuel", correo: "admin@mail.com", rol: "Administrador" },
    { nombre: "Ana", correo: "ana@mail.com", rol: "Diseñador" },
    { nombre: "Carlos", correo: "carlos@mail.com", rol: "Programador" },
  ];
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
}

// Guarda qué usuario estás editando
let editIndex = null;

// === EVENTOS ===
btnNuevo.onclick = () => {
  modal.style.display = "flex";
  editIndex = null;
};

cerrar.onclick = () => (modal.style.display = "none");

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
          <button class="btn-edit" onclick="editarUsuario(${index})">
            Editar
          </button>
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
  //   persistencia
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  renderTabla();
}

// === EDITAR ===
function editarUsuario(i) {
  const u = usuarios[i];

  document.getElementById("nombre").value = u.nombre;
  document.getElementById("correo").value = u.correo;
  document.getElementById("rol").value = u.rol;

  modal.style.display = "flex";
  editIndex = i;
}

// === GUARDAR ===
document.getElementById("btnGuardar").onclick = () => {
  const nombre = document.getElementById("nombre");
  const correo = document.getElementById("correo");
  const rol = document.getElementById("rol");

  if (!nombre.value || !correo.value) return alert("Completa los campos");

  if (editIndex === null) {
    usuarios.push({
      nombre: nombre.value,
      correo: correo.value,
      rol: rol.value,
    });
  } else {
    usuarios[editIndex] = {
      nombre: nombre.value,
      correo: correo.value,
      rol: rol.value,
    };
  }

  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  modal.style.display = "none";
  renderTabla();

  // limpiar
  nombre.value = "";
  correo.value = "";
};

// inicial
renderTabla();
