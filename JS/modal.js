// === MODAL USUARIOS ===

const btnNuevo = document.getElementById("btnNuevoUsuario");
const modal = document.getElementById("modalUsuario");
const cerrar = document.getElementById("cerrarModal");
const btnGuardar = document.getElementById("btnGuardar");

btnNuevo.onclick = ()=> modal.style.display="flex";
cerrar.onclick = ()=> modal.style.display="none";

// GUARDAR
btnGuardar.onclick = ()=>{

  let nombre = document.getElementById("nombre").value;
  let correo = document.getElementById("correo").value;
  let rol = document.getElementById("rol").value;

  if(!nombre || !correo){
    alert("Completa los campos");
    return;
  }

  let fila = `
    <tr>
      <td>${nombre}</td>
      <td>${correo}</td>
      <td>${rol}</td>
    </tr>
  `;

  document.getElementById("tablaUsuarios")
  .insertAdjacentHTML("beforeend",fila);

  modal.style.display="none";

  // limpiar
  nombre.value="";
  correo.value="";
}

