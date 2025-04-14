// Mobile navigation
const hamburgerMenu = document.getElementById('hamburger-menu');
const navLinks = document.querySelector('.nav-links');

hamburgerMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

const navItems = document.querySelectorAll('.nav-links a');
navItems.forEach(item => {
  item.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// Shopping cart logic
let cart = [];
let cartCount = document.getElementById('cart-count');
let cartContainer = document.getElementById('cart-container');
let cartItemsContainer = document.getElementById('cart');
let totalElement = document.getElementById('total');

// Toggle Cart visibility
function toggleCart() {
    cartContainer.classList.toggle('hidden');
    renderCart();
}

// Add item to cart
function addToCart(name, price) {
    cart.push({ name, price });
    renderCart();
}

// Render Cart
function renderCart() {
    cartItemsContainer.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        let itemElement = document.createElement('div');
        itemElement.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsContainer.appendChild(itemElement);
        total += item.price;
    });
    totalElement.textContent = `Total: $${total.toFixed(2)}`;
    cartCount.textContent = cart.length;
}

// Clear Cart
function clearCart() {
    cart = [];
    renderCart();
}

// Close cart
const closeCartButton = document.getElementById('close-cart');
if (closeCartButton) {
    closeCartButton.addEventListener('click', () => {
        cartContainer.classList.add('hidden');
    });
}
