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
let total = 0;

function addToCart(itemName, price) {
  cart.push({ name: itemName, price });
  updateCartDisplay();
}

function updateCartDisplay() {
  const cartDiv = document.getElementById('cart');
  const totalP = document.getElementById('total');
  const cartCount = document.getElementById('cart-count');

  cartDiv.innerHTML = '';
  total = 0;

  cart.forEach((item, index) => {
    const itemDiv = document.createElement('div');
    itemDiv.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartDiv.appendChild(itemDiv);
    total += item.price;
  });

  totalP.textContent = `Total: $${total.toFixed(2)}`;
  cartCount.textContent = cart.length;
}

function toggleCart() {
  const cartContainer = document.getElementById('cart-container');
  cartContainer.classList.toggle('hidden');
}

// Close cart when clicking on close button
const closeCartButton = document.getElementById('close-cart');
if (closeCartButton) {
  closeCartButton.addEventListener('click', () => {
    const cartContainer = document.getElementById('cart-container');
    cartContainer.classList.add('hidden'); // Hide the cart
  });
}

function clearCart() {
  cart = [];
  updateCartDisplay();
}