// 1. DECLARACIÓN GLOBAL (El contenedor vacío)
let MOCK_DB = [];

// 2. FUNCIÓN DE CARGA (El motor que llena el contenedor)
async function loadData() {
    try {
        const response = await fetch('productos.json'); // Asegúrate que el archivo se llame así
        if (!response.ok) throw new Error("Archivo no encontrado");
        MOCK_DB = await response.json();
        
        console.log("Base de datos cargada:", MOCK_DB);
        
        // Renderizado inicial
        mountShop(); 
    } catch (error) {
        console.error("Fallo al cargar la base de datos:", error);
    }
}

// 3. LÓGICA DE NEGOCIO (Los filtros)
function getFiltered(categoria) {
    // Si MOCK_DB está vacío, no podemos filtrar nada
    if (!MOCK_DB || MOCK_DB.length === 0) {
        console.error("Error: Intentaste filtrar antes de que la DB cargara.");
        return [];
    }
    
    // Si el usuario pide "todo", retornamos la lista completa
    if (categoria === 'todo') return MOCK_DB;
    
    return MOCK_DB.filter(item => item.category === categoria);
}

// 4. LÓGICA DE RENDERIZADO
function mountShop(categoria = 'todo') {
    const container = document.getElementById('shop-container');
    if (!container) return;

    const productos = getFiltered(categoria);
    
    container.innerHTML = productos.map(producto => `
        <div class="product-card visible">
            <h3>${producto.name}</h3>
            <p>$${producto.price}</p>
        </div>
    `).join('');
}

// 5. INICIALIZACIÓN
document.addEventListener('DOMContentLoaded', loadData);
