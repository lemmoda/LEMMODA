// En tu archivo main.js
async function loadData() {
    try {
        // Asegúrate de que el nombre aquí sea idéntico al del archivo físico
        const response = await fetch('productos.json'); 
        
        if (!response.ok) throw new Error("No se pudo conectar con el catálogo");
        
        MOCK_DB = await response.json();
        mountShop();
    } catch (error) {
        console.error("Error de arquitectura:", error);
    }
}
