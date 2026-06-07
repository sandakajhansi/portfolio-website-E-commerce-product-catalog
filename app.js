function renderProducts() {

    const app = document.getElementById("app");

    let html = "<h1>Products</h1>";

    products.forEach(product => {

        html += `
        <div class="product-card">
            <img src="${product.image}">
            <h3>${product.name}</h3>
            <p>₹${product.price}</p>
        </div>
        `;
    });

    app.innerHTML = html;
}

router();
