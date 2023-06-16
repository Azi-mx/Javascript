const productList = document.querySelector('.product-list');
const cartList = document.querySelector('.cart-list');
let cartItemID = 1;

document.addEventListener('DOMContentLoaded', () => {
  fetch('details.json')
    .then(response => response.json())
    .then(data => {
      productList.innerHTML = data
        .map(product => `
          <div class="product-item">
            <img src="${product.imgSrc}" alt="product image">
            <h3 class="product-name">${product.name}</h3>
            <span class="product-category">${product.category}</span>
            <p class="product-price">$${product.price}</p>
            <button class="add-to-cart-btn" data-id="${cartItemID++}">Add To Cart</button>
          </div>
        `)
        .join('');
    })
    .catch(error => {
      alert('Please use a local or live server to fetch the JSON data.');
    });
});

productList.addEventListener('click', event => {
  const addButton = event.target.closest('.add-to-cart-btn');
  if (addButton) {
    const product = addButton.parentNode;
    const productInfo = {
      id: addButton.dataset.id,
      imgSrc: product.querySelector('img').src,
      name: product.querySelector('.product-name').textContent,
      category: product.querySelector('.product-category').textContent,
      price: product.querySelector('.product-price').textContent
    };
    cartList.innerHTML += `
      <div class="cart-item" data-id="${productInfo.id}">
        <img src="${productInfo.imgSrc}" alt="product image">
        <div class="cart-item-info">
          <h3 class="cart-item-name">${productInfo.name}</h3>
          <span class="cart-item-category">${productInfo.category}</span>
          <span class="cart-item-price">${productInfo.price}</span>
        </div>
        <button class="cart-item-del-btn">
          <i class="fas fa-times"></i>
        </button>
      </div>
    `;
  }
});

cartList.addEventListener('click', event => {
  const deleteButton = event.target.closest('.cart-item-del-btn');
  if (deleteButton) {
    const cartItem = deleteButton.parentNode;
    cartItem.remove();
  }
});
