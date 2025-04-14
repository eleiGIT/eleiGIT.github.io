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

let cart = {};

function addToCart(itemName, itemPrice) {
  if (cart[itemName]) {
    cart[itemName].quantity += 1;
  } else {
    cart[itemName] = { price: itemPrice, quantity: 1 };
  }
  updateCart();
}

function removeFromCart(itemName) {
  if (cart[itemName]) {
    cart[itemName].quantity -= 1;
    if (cart[itemName].quantity <= 0) {
      delete cart[itemName];
    }
    updateCart();
  }
}

function clearCart() {
  cart = {};
  updateCart();
}

function updateCart() {
  const cartDiv = document.getElementById("cart");
  cartDiv.innerHTML = "";

  let total = 0;
  for (let item in cart) {
    const { price, quantity } = cart[item];
    total += price * quantity;

    const itemDiv = document.createElement("div");
    itemDiv.className = "cart-item";
    itemDiv.innerHTML = `
      <span>${item} - $${price.toFixed(2)} x ${quantity}</span>
      <button onclick="removeFromCart('${item}')">Remove</button>
    `;
    cartDiv.appendChild(itemDiv);
  }

  document.getElementById("total").innerText = `Total: $${total.toFixed(2)}`;
}