import {Product} from "./constructor/Product"
import {Cart} from "./constructor/Cart"
import { displayProductsView } from "./views/allProductsView";

const products = [
    new Product(1, "Sülearvuti", 999.99, "Elektroonika"),
    new Product(2, "Telefon", 599.99, "Elektroonika"),
    new Product(3, "Tahvelarvuti", 299.99, "Elektroonika"),
];

//Toote kuvamine

function displayProducts() {
    const productsContainer = document.getElementById("Products")
    products.forEach(product => {
        productcard = document.createElement("div")

        const productTitle = document.createElement("h3");
        productTitle.textContent = product.name;
        productCard.append(productTitle)
    });
}