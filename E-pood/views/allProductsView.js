export const displayProductsView = (products, cart, favourites) => {
    const container = document.getElementById("app");
    container.innerHTML = ""; // Clear existing content

    products.forEach((product) => {
        const productCard = document.createElement("div");
        productCard.classList.add("product");
        productCard.innerHTML = `
            <h3>${product.name}</h3>
            <p>Category: ${product.category}</p>
            <p>Price: €${product.price}</p>
            <button class="add-to-cart">Lisa ostukorvi</button>
            <button class="add-to-favourites">Lisa lemmikutesse</button>
        `;

        productCard.querySelector(".add-to-cart").onclick = () => {
            cart.addProduct(product);
            console.log(`Added ${product.name} to cart.`);
        };

        productCard.querySelector(".add-to-favourites").onclick = () => {
            if (!favourites.includes(product)) {
                favourites.push(product);
                console.log(`Added ${product.name} to favourites.`);
            }
        };

        container.appendChild(productCard);
    });
};