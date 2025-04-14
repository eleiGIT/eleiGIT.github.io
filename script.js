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

// Shopping cart
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

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.classList.add('remove-item');
    removeButton.addEventListener('click', () => removeFromCart(index));

    itemDiv.appendChild(removeButton);
    cartDiv.appendChild(itemDiv);

    total += item.price;
  });

  totalP.textContent = `Total: $${total.toFixed(2)}`;
  cartCount.textContent = cart.length;
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartDisplay();
}

function toggleCart() {
  const cartContainer = document.getElementById('cart-container');
  cartContainer.classList.toggle('hidden');
}

function clearCart() {
  cart = [];
  updateCartDisplay();
}

document.getElementById('close-cart').addEventListener('click', () => {
  document.getElementById('cart-container').classList.add('hidden');
});