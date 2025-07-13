
function mostrarInfo(asignatura) {
  const info = {
    'IntroTS': 'Fundamentos teóricos y prácticos del Trabajo Social.'
  };

  document.getElementById('info-asignatura').innerText = info[asignatura] || 'Información no disponible.';
  document.getElementById('modal').classList.remove('oculto');
}

function cerrarModal() {
  document.getElementById('modal').classList.add('oculto');
}
