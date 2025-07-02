// Products data
const products = [
    {
        id: 1,
        name: "Canva Pro",
        image: "assets/images/canva-pro.png.png",
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
        image: "assets/images/spotify-premium.png",
        originalPrice: 21.90,
        currentPrice: 7.99,
        discount: 64,
        description: "Filmes e séries em 4K"
    },
    {
        id: 12,
        name: "ChatGPT Plus",
        image: "assets/images/chatgpt-pluss.png",
        originalPrice: 14.99,
        currentPrice: 10.00,
        discount: 0,
        description: "Inteligência Artificial avançada"
    }
];

let isCartOpen = false;

// DOM elements
const productsGrid = document.getElementById('productsGrid');
const cartSidebar = document.getElementById('cartSidebar');
const cartCount = document.getElementById('cartCount');
const cartContent = document.getElementById('cartContent');
const cartSummary = document.getElementById('cartSummary');
const emptyCart = document.getElementById('emptyCart');
const cartItems = document.getElementById('cartItems');
const subtotal = document.getElementById('subtotal');
const total = document.getElementById('total');
const overlay = document.getElementById('overlay');
const checkoutModal = document.getElementById('checkoutModal');
const successModal = document.getElementById('successModal');

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    renderProducts();
    updateCartUI();
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

// Add product to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    updateCartUI();
    
    // Show success animation
    const button = event.target;
    const originalText = button.innerHTML;
    button.innerHTML = '<i class="fas fa-check"></i> Adicionado!';
    button.style.background = '#00ff88';
    
    setTimeout(() => {
        button.innerHTML = originalText;
        button.style.background = '#c8ff00';
    }, 1500);
}

// Remove product from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
}

// Update quantity
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCartUI();
        }
    }
}

// Update cart UI
function updateCartUI() {
    const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartTotal = cart.reduce((sum, item) => sum + (item.currentPrice * item.quantity), 0);
    
    cartCount.textContent = itemCount;
    cartCount.style.display = itemCount > 0 ? 'flex' : 'none';
    
    if (cart.length === 0) {
        emptyCart.style.display = 'block';
        cartSummary.style.display = 'none';
    } else {
        emptyCart.style.display = 'none';
        cartSummary.style.display = 'block';
        
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.name}" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjMzMzIiByeD0iNCIvPgo8dGV4dCB4PSIyMCIgeT0iMjQiIGZpbGw9IiM2NjYiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSI4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5JbWc8L3RleHQ+Cjwvc3ZnPgo='">
                </div>
                <div class="cart-item-info">
                    <div class="cart-item-title">${item.name}</div>
                    <div class="cart-item-price">R$ ${item.currentPrice.toFixed(2)}</div>
                </div>
                <div class="cart-item-controls">
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                </div>
            </div>
        `).join('');
        
        subtotal.textContent = `R$ ${cartTotal.toFixed(2)}`;
        total.textContent = `R$ ${cartTotal.toFixed(2)}`;
    }
}

// Toggle cart sidebar
function toggleCart() {
    isCartOpen = !isCartOpen;
    cartSidebar.classList.toggle('open', isCartOpen);
    overlay.classList.toggle('active', isCartOpen);
    document.body.style.overflow = isCartOpen ? 'hidden' : 'auto';
}

// Show checkout
function showCheckout() {
    if (cart.length === 0) return;
    
    toggleCart(); // Close cart sidebar
    checkoutModal.classList.add('open');
    document.body.style.overflow = 'hidden';
    
    // Update checkout content
    const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartTotal = cart.reduce((sum, item) => sum + (item.currentPrice * item.quantity), 0);
    
    document.getElementById('checkoutItemCount').textContent = `${itemCount} ${itemCount === 1 ? 'item' : 'itens'}`;
    document.getElementById('checkoutSubtotal').textContent = `R$ ${cartTotal.toFixed(2)}`;
    document.getElementById('checkoutTotal').textContent = `R$ ${cartTotal.toFixed(2)}`;
    
    document.getElementById('checkoutItems').innerHTML = cart.map(item => `
        <div class="checkout-item">
            <div class="checkout-item-image">
                <img src="${item.image}" alt="${item.name}" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA1MCA1MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBmaWxsPSIjMzMzIiByeD0iNCIvPgo8dGV4dCB4PSIyNSIgeT0iMjgiIGZpbGw9IiM2NjYiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSI4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5JbWc8L3RleHQ+Cjwvc3ZnPgo='">
            </div>
            <div class="checkout-item-info">
                <div class="checkout-item-title">${item.name}</div>
                <div class="checkout-item-price">R$ ${item.currentPrice.toFixed(2)}</div>
            </div>
            <div class="checkout-item-controls">
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1); updateCheckoutDisplay();">-</button>
                <span class="quantity">${item.quantity}</span>
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1); updateCheckoutDisplay();">+</button>
            </div>
        </div>
    `).join('');
}

// Update checkout display
function updateCheckoutDisplay() {
    const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartTotal = cart.reduce((sum, item) => sum + (item.currentPrice * item.quantity), 0);
    
    document.getElementById('checkoutItemCount').textContent = `${itemCount} ${itemCount === 1 ? 'item' : 'itens'}`;
    document.getElementById('checkoutSubtotal').textContent = `R$ ${cartTotal.toFixed(2)}`;
    document.getElementById('checkoutTotal').textContent = `R$ ${cartTotal.toFixed(2)}`;
    
    document.getElementById('checkoutItems').innerHTML = cart.map(item => `
        <div class="checkout-item">
            <div class="checkout-item-image">
                <img src="${item.image}" alt="${item.name}" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA1MCA1MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBmaWxsPSIjMzMzIiByeD0iNCIvPgo8dGV4dCB4PSIyNSIgeT0iMjgiIGZpbGw9IiM2NjYiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSI4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5JbWc8L3RleHQ+Cjwvc3ZnPgo='">
            </div>
            <div class="checkout-item-info">
                <div class="checkout-item-title">${item.name}</div>
                <div class="checkout-item-price">R$ ${item.currentPrice.toFixed(2)}</div>
            </div>
            <div class="checkout-item-controls">
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1); updateCheckoutDisplay();">-</button>
                <span class="quantity">${item.quantity}</span>
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1); updateCheckoutDisplay();">+</button>
            </div>
        </div>
    `).join('');
}

// Close checkout
function closeCheckout() {
    checkoutModal.classList.remove('open');
    document.body.style.overflow = 'auto';
}

// Finalize order
function finalizeOrder() {
    // Validate form
    const emails = document.querySelectorAll('input[type="email"]');
    const terms = document.querySelector('input[type="checkbox"]');
    
    let isValid = true;
    emails.forEach(email => {
        if (!email.value || !email.value.includes('@')) {
            email.style.borderColor = '#ff4444';
            isValid = false;
        } else {
            email.style.borderColor = 'rgba(255, 255, 255, 0.2)';
        }
    });
    
    if (!terms.checked) {
        alert('Por favor, aceite os termos de serviço.');
        return;
    }
    
    if (!isValid) {
        alert('Por favor, preencha todos os campos corretamente.');
        return;
    }
    
    // Show success modal
    closeCheckout();
    showSuccessModal();
}

// Show success modal
function showSuccessModal() {
    const cartTotal = cart.reduce((sum, item) => sum + (item.currentPrice * item.quantity), 0);
    
    document.getElementById('finalOrderSummary').innerHTML = cart.map(item => `
        <div style="display: flex; justify-content: space-between; margin-bottom: 8px; color: #888;">
            <span>${item.name} x${item.quantity}</span>
            <span>R$ ${(item.currentPrice * item.quantity).toFixed(2)}</span>
        </div>
    `).join('');
    
    document.getElementById('finalTotal').textContent = `R$ ${cartTotal.toFixed(2)}`;
    
    successModal.classList.add('open');
    document.body.style.overflow = 'hidden';
}

// Copy Discord username
function copyDiscord() {
    navigator.clipboard.writeText('edu_max').then(() => {
        const button = event.target.closest('button');
        const originalText = button.innerHTML;
        button.innerHTML = '<i class="fas fa-check"></i> Copiado!';
        button.style.background = '#00ff88';
        
        setTimeout(() => {
            button.innerHTML = originalText;
            button.style.background = '#7289da';
        }, 2000);
    });
}

// Back to store
function backToStore() {
    successModal.classList.remove('open');
    document.body.style.overflow = 'auto';
}

// New order
function newOrder() {
    cart = [];
    updateCartUI();
    successModal.classList.remove('open');
    document.body.style.overflow = 'auto';
}

// Close modals when clicking overlay
overlay.addEventListener('click', function() {
    if (isCartOpen) {
        toggleCart();
    }
});

// Close modals with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        if (successModal.classList.contains('open')) {
            backToStore();
        } else if (checkoutModal.classList.contains('open')) {
            closeCheckout();
        } else if (isCartOpen) {
            toggleCart();
        }
    }
});

// Search functionality
const searchInput = document.querySelector('.search-bar input');
searchInput.addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        const productName = card.querySelector('.product-title').textContent.toLowerCase();
        if (productName.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

// Smooth scrolling for better UX
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add loading animation for images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
    });
});

// Add hover effects for better interactivity
document.addEventListener('DOMContentLoaded', function() {
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Add ripple effect to buttons
function createRipple(event) {
    const button = event.currentTarget;
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add('ripple');
    
    const ripple = button.getElementsByClassName('ripple')[0];
    if (ripple) {
        ripple.remove();
    }
    
    button.appendChild(circle);
}

// Add ripple effect CSS
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 600ms linear;
        background-color: rgba(255, 255, 255, 0.6);
        pointer-events: none;
    }
    
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// Apply ripple effect to buttons
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', createRipple);
        button.style.position = 'relative';
        button.style.overflow = 'hidden';
    });
});





