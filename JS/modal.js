// === MODAL NUEVO USUARIO ===
const btnNuevo = document.getElementById("btnNuevoUsuario");
const modal = document.getElementById("modalUsuario");
const cerrar = document.getElementById("cerrarModal");

btnNuevo.addEventListener("click",()=>{
  modal.style.display="flex";
});

cerrar.addEventListener("click",()=>{
  modal.style.display="none";
});
