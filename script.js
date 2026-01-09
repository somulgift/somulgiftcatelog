let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(product, price) {
  cart.push({ product, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${product} added to cart!`);
}

function displayCart() {
  const cartItems = document.getElementById("cartItems");
  const totalPrice = document.getElementById("totalPrice");
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.product} - RM ${item.price}`;
    cartItems.appendChild(li);
    total += item.price;
  });

  totalPrice.textContent = `Total: RM ${total}`;
}

function checkout() {
  alert("Checkout process started! (Integrate payment here)");
  cart = [];
  localStorage.removeItem("cart");
  displayCart();
}

document.addEventListener("DOMContentLoaded", displayCart);
