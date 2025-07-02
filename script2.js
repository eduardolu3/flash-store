
// Products data
const products = [
    {
        id: 1,
        name: "Canva Pro",
        image: "assets/images/canva-pro.png",
        originalPrice: 15.99,
        currentPrice: 4.99,
        discount: 69,
        description: "Design profissional ilimitado"
    },
    {
        id: 2,
        name: "CapCut Pro",
        image: "assets/images/capcut-pro.jpg",
        originalPrice: 14.99,
        currentPrice: 10.00,
        discount: 69,
        description: "Edição de vídeo premium"
    },
    {
        id: 3,
        name: "YouTube Premium",
        image: "assets/images/youtube-premium.png",
        originalPrice: 20.90,
        currentPrice: 7.99,
        discount: 67,
        description: "Sem anúncios e downloads"
    },
    {
        id: 4,
        name: "Spotify Family",
        image: "assets/images/spotify-family-generica.png",
        originalPrice: 26.90,
        currentPrice: 10.99,
        discount: 67,
        description: "Até 6 contas premium"
    },
    {
        id: 5,
        name: "HBO Max Premium",
        image: "assets/images/hbo-max.png",
        originalPrice: 29.90,
        currentPrice: 9.99,
        discount: 67,
        description: "Filmes e séries em 4K"
    },
    {
        id: 6,
        name: "Prime Video Premium",
        image: "assets/images/prime-video.png",
        originalPrice: 14.90,
        currentPrice: 4.99,
        discount: 66,
        description: "Filmes e séries exclusivos"
    },
    {
        id: 7,
        name: "Paramount Premium",
        image: "assets/images/paramount.png",
        originalPrice: 19.90,
        currentPrice: 6.99,
        discount: 65,
        description: "Séries e filmes de sucesso"
    },
    {
        id: 8,
        name: "Crunchyroll Premium",
        image: "assets/images/crunchyroll.png",
        originalPrice: 14.90,
        currentPrice: 4.99,
        discount: 66,
        description: "Animes e mangás ilimitados"
    },
    {
        id: 9,
        name: "Netflix Premium",
        image: "assets/images/netflix.png",
        originalPrice: 55.90,
        currentPrice: 9.99,
        discount: 64,
        description: "Séries e filmes em 4K"
    },
    {
        id: 10,
        name: "Disney Plus",
        image: "assets/images/disney-plus.png",
        originalPrice: 33.90,
        currentPrice: 6.99,
        discount: 64,
        description: "Filmes e séries da Disney"
    },
    {
        id: 11,
        name: "Spotify Premium Individual",
        image: "assets/images/spotify-individual.png",
        originalPrice: 21.90,
        currentPrice: 7.99,
        discount: 64,
        description: "Música premium individual"
    },
    {
        id: 12,
        name: "ChatGPT Plus",
        image: "assets/images/chatgpt-plus.png",
        originalPrice: 14.99,
        currentPrice: 10.00,
        discount: 0,
        description: "Inteligência Artificial avançada"
    }
];

// DOM elements
const productsGrid = document.getElementById('productsGrid');

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    renderProducts();
});

// Render products
function renderProducts() {
    productsGrid.innerHTML = products.map(product => `
        <div class="product-card">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIiBmaWxsPSIjMzMzIiByeD0iOCIvPgo8dGV4dCB4PSI0MCIgeT0iNDUiIGZpbGw9IiM2NjYiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+SW1hZ2VtPC90ZXh0Pgo8L3N2Zz4K'">
            </div>
            <h3 class="product-title">${product.name}</h3>
            <div class="product-price">
                <span class="original-price">R$ ${product.originalPrice.toFixed(2)}</span>
                <span class="discount">-${product.discount}%</span>
            </div>
            <div class="current-price">R$ ${product.currentPrice.toFixed(2)}</div>
            <div class="price-note">À vista no PIX</div>
            <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                <i class="fas fa-shopping-cart"></i>
                Adicionar no Carrinho
            </button>
        </div>
    `).join('');
}


