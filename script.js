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
    const itemContainer = document.createElement('div');
    itemContainer.style.display = 'flex';
    itemContainer.style.justifyContent = 'space-between';
    itemContainer.style.alignItems = 'center';
    itemContainer.style.marginBottom = '8px';

    const itemText = document.createElement('span');
    itemText.textContent = `${item.name} - $${item.price.toFixed(2)}`;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.style.backgroundColor = '#aa3333';
    removeBtn.style.color = 'white';
    removeBtn.style.border = 'none';
    removeBtn.style.padding = '4px 8px';
    removeBtn.style.cursor = 'pointer';
    removeBtn.style.borderRadius = '4px';
    removeBtn.onclick = () => {
      removeFromCart(index);
    };

    itemContainer.appendChild(itemText);
    itemContainer.appendChild(removeBtn);
    cartDiv.appendChild(itemContainer);

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