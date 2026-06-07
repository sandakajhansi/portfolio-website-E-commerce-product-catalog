function router() {

    const app = document.getElementById("app");

    switch(location.hash) {

        case "#products":
            renderProducts();
            break;

        case "#about":
            app.innerHTML = `
                <h1>About Us</h1>
                <p>Simple E-Commerce Product Catalog.</p>
            `;
            break;

        default:
            app.innerHTML = `
                <h1>Welcome</h1>
                <p>Browse our products.</p>
            `;
    }
}

window.addEventListener("hashchange", router);
