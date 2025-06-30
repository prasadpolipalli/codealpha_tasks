fetch('/api/products')
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById('product-list');
    data.forEach(p => {
      const div = document.createElement('div');
      div.className = 'card';
      div.innerHTML = `<h3>${p.name}</h3><p>${p.price}</p><a href="product.html?id=${p._id}">View</a>`;
      list.appendChild(div);
    });
  });
