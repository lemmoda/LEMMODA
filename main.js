// main.js - Código Global y Definitivo
function goTo(id) {
    console.log("Navegando a: " + id);
    
    // 1. Ocultar todas las secciones
    const sections = document.querySelectorAll('.view-layer');
    sections.forEach(s => s.classList.remove('active'));
    
    // 2. Mostrar la sección destino
    const target = document.getElementById(id);
    if (target) {
        target.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        console.error("ERROR: No existe una sección con el ID: " + id);
    }
}
