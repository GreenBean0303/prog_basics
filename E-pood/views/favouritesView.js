export const displayFavouritesView = (favourites, cart) => {
    const container = document.getElementById("app");

    if (!container) {
        console.error("Container with ID 'app' not found.");
        return;
    }
    container.innerHTML = ""; 
    if (favourites.length === 0) {
        container.innerHTML = "<p>You have no favourite products yet.</p>";
        return;
    }
    favourites.forEach((product) => {
        const productCard = document.createElement("div");
        productCard.classList.add("product");
        productCard.innerHTML = `
            <h3>${product.name}</h3>
            <p>Category: ${product.category}</p>
            <p>Price: €${product.price}</p>
            <button class="add-to-cart">Add to Cart</button>
            <button class="remove-from-favourites">Remove</button>
        `;
        productCard.querySelector(".add-to-cart").addEventListener("click", () => {
            cart.addProduct(product);
            console.log(`Added ${product.name} to cart.`);
        });

        productCard.querySelector(".remove-from-favourites").addEventListener("click", () => {
            const index = favourites.indexOf(product);
            if (index > -1) {
                favourites.splice(index, 1); 
                console.log(`Removed ${product.name} from favourites.`);
                displayFavouritesView(favourites, cart);
            }
        });

        container.appendChild(productCard);
    });
};