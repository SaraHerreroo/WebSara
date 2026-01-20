function actualizarFechaHora() {
  const elFecha = document.getElementById("fecha");
  const elHora = document.getElementById("hora");
  if (!elFecha || !elHora) return;

  const ahora = new Date();

  elFecha.textContent = ahora.toLocaleDateString("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });

  elHora.textContent = ahora.toLocaleTimeString("es-ES");
}

actualizarFechaHora();
setInterval(actualizarFechaHora, 1000);