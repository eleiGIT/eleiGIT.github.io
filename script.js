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

let cart = [];

function addToCart(name, price) {
  const existingItem = cart.find(item => item.name === name);
  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({ name, price, quantity: 1 });
  }
  updateCartDisplay();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartDisplay();
}

function clearCart() {
  cart = [];
  updateCartDisplay();
}

function updateCartDisplay() {
  const cartDiv = document.getElementById('cart');
  const totalSpan = document.getElementById('total');
  const cartCount = document.getElementById('cart-count');
  cartDiv.innerHTML = '';

  let total = 0;
  cart.forEach((item, index) => {
    total += item.price * item.quantity;
    const p = document.createElement('p');
    p.innerHTML = `${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}
      <button onclick="removeFromCart(${index})">Remove</button>`;
    cartDiv.appendChild(p);
  });

  cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
  totalSpan.textContent = `Total: $${total.toFixed(2)}`;
}

function toggleCart() {
  const cartPopup = document.getElementById('cart-container');
  cartPopup.classList.toggle('hidden');
}