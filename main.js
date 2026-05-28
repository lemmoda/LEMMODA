// 1. FORZAR ELIMINACIÓN DEL PRELOADER
// Esto se ejecuta en cuanto la página termina de cargar (imágenes, estilos, etc.)
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => preloader.style.display = 'none', 500);
    }
});

// 2. FUNCIÓN DE NAVEGACIÓN GLOBAL
// Esto hace que goTo('id') funcione desde cualquier botón
window.goTo = function(id) {
    console.log("Navegando a: " + id);
    
    // Ocultar todas las secciones .view-layer
    document.querySelectorAll('.view-layer').forEach(s => s.classList.remove('active'));
    
    // Mostrar la sección destino
    const target = document.getElementById(id);
    if (target) {
        target.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        console.error("ERROR: No existe una sección con el ID: " + id);
    }
};
