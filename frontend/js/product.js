const id = new URLSearchParams(window.location.search).get('id');
fetch(`/api/products/${id}`)
  .then(res => res.json())
  .then(product => {
    document.getElementById('product-details').innerHTML = `
      <h2>${product.name}</h2>
      <p>${product.description}</p>
      <p>${product.price}</p>
      <button onclick='addToCart("${product._id}")'>Add to Cart</button>`;
  });

function addToCart(id) {
  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  cart.push(id);
  localStorage.setItem('cart', JSON.stringify(cart));
  alert('Added to cart!');
}
