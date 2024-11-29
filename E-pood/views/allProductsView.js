export const displayProductsView = (products) => {
    const productsContainer = document.createElement("div");
    productsContainer.classList.add("Product");

    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("Product");
        productCard.innerHTML = `
        <h3>${product.name}</h3>
        <p>Kategooria:${product.category}</p>
        <p>Hind:${product.price}</p>
    `;

    productCard.onClick = (e) => {
        e.stopPropagation();
        navigateTo("productDetailView")
    }
    productsContainer.append(productCard)

        
    });
}