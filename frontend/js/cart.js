const cart = JSON.parse(localStorage.getItem('cart') || '[]');
const cartItems = document.getElementById('cart-items');
cart.forEach(id => {
  fetch(`/api/products/${id}`)
    .then(res => res.json())
    .then(p => {
      const div = document.createElement('div');
      div.className = 'card';
      div.innerHTML = `<h3>${p.name}</h3><p>${p.price}</p>`;
      cartItems.appendChild(div);
    });
});

function placeOrder() {
  const token = localStorage.getItem('token');
  fetch('/api/orders', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
    },
    body: JSON.stringify({ items: cart })
  }).then(res => {
    if (res.ok) {
      alert('Order placed!');
      localStorage.removeItem('cart');
    } else {
      alert('Login first');
    }
  });
}
