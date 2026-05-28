// Este bloque asegura que los botones funcionen
document.addEventListener('DOMContentLoaded', () => {

    // Función para manejar la navegación
    function goTo(sectionId) {
        // Oculta todas las secciones
        document.querySelectorAll('.view-layer').forEach(s => s.classList.remove('active'));
        
        // Muestra la sección destino
        const target = document.getElementById(sectionId);
        if (target) {
            target.classList.add('active');
        } else {
            console.error("No se encontró la sección:", sectionId);
        }
    }

    // Vinculamos los botones que acabas de modificar
    const btnExplore = document.getElementById('btn-explore');
    const btnHistory = document.getElementById('btn-history');

    if (btnExplore) {
        btnExplore.addEventListener('click', () => {
            goTo('shop'); // Asegúrate que tu sección de tienda tenga id="shop"
        });
    }

    if (btnHistory) {
        btnHistory.addEventListener('click', () => {
            goTo('essence'); // Asegúrate que tu sección de historia tenga id="essence"
        });
    }
});
