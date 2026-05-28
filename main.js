// main.js
let MOCK_DB = [];

async function init() {
    try {
        const response = await fetch('productos.json');
        MOCK_DB = await response.json();
        mountShop(); // Render inicial
        setupEventListeners(); // Vinculamos los clicks aquí, no en el HTML
    } catch (err) {
        console.error("Error cargando DB:", err);
    }
}

function setupEventListeners() {
    // Filtros
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const cat = e.target.getAttribute('data-category');
            mountShop(cat);
        });
    });

    // Buscador
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase();
            const filtered = MOCK_DB.filter(p => p.name.toLowerCase().includes(term));
            renderProducts(filtered);
        });
    }
}

function mountShop(category = 'todo') {
    const products = category === 'todo' 
        ? MOCK_DB 
        : MOCK_DB.filter(p => p.category === category);
    renderProducts(products);
}

function renderProducts(list) {
    const container = document.getElementById('shop-container');
    if (!container) return;
    
    container.innerHTML = list.map(p => `
        <div class="product-card visible">
            <h3>${p.name}</h3>
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', init);
