document.addEventListener('DOMContentLoaded', () => {
    console.log("Script cargado y DOM listo.");

    const btnExplore = document.getElementById('btn-explore');
    const btnHistory = document.getElementById('btn-history');

    // Función de navegación
    const goTo = (id) => {
        console.log("Intentando navegar a:", id);
        const sections = document.querySelectorAll('.view-layer');
        sections.forEach(s => s.classList.remove('active'));
        
        const target = document.getElementById(id);
        if (target) {
            target.classList.add('active');
            console.log("Sección encontrada y activada.");
        } else {
            console.error("ERROR: No existe una sección con id='" + id + "'");
        }
    };

    // Conectar botón explorar
    if (btnExplore) {
        btnExplore.addEventListener('click', () => {
            console.log("Clic en Explorar");
            goTo('shop'); 
        });
    } else {
        console.error("ERROR: No encontré el botón btn-explore");
    }

    // Conectar botón historia
    if (btnHistory) {
        btnHistory.addEventListener('click', () => {
            console.log("Clic en Historia");
            goTo('essence');
        });
    } else {
        console.error("ERROR: No encontré el botón btn-history");
    }
});
