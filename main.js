// Variable global para nuestra "base de datos"
let MOCK_DB = [];

// Función para cargar los datos
async function loadData() {
    try {
        const response = await fetch('PRODUCTOS.JSON.txt'); 
        if (!response.ok) throw new Error("No se pudo cargar el archivo");
        
        MOCK_DB = await response.json();
        
        // Iniciamos el renderizado una vez cargada la data
        mountShop();
        
        // Ocultamos el preloader elegantemente
        const preloader = document.getElementById('preloader');
        if (preloader) {
            preloader.style.opacity = '0';
            setTimeout(() => preloader.style.display = 'none', 1200);
        }
    } catch (error) {
        console.error("Error de arquitectura:", error);
    }
}

// Función para renderizar los productos (El puente)
function mountShop() {
    const container = document.getElementById('shop-container');
    if (!container) return;

    container.innerHTML = MOCK_DB.map(producto => `
        <div class="product-card visible">
            <div class="img-container">
                <img src="${producto.img_default}" alt="${producto.name}" class="loaded">
                <div class="details-overlay">
                    <button class="btn-view-details">Detalles</button>
                </div>
            </div>
            <div class="product-info">
                <p class="prod-cat">${producto.category}</p>
                <h3 class="prod-name">${producto.name}</h3>
                <p class="prod-price">$${producto.price.toFixed(2)}</p>
            </div>
        </div>
    `).join('');
}

// Inicialización cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', loadData);
