import { Product } from "./constructor/Product.js";
import { Cart } from "./constructor/Cart.js";
import { displayProductsView } from "./views/allProductsView.js";
import { displayFavouritesView } from "./views/favouritesView.js";
import { displayCartView } from "./views/cartView.js";

const products = [
    new Product(1, "Sülearvuti", 999.99, "Elektroonika"),
    new Product(2, "Telefon", 599.99, "Elektroonika"),
    new Product(3, "Tahvelarvuti", 299.99, "Elektroonika"),
];

const cart = new Cart();
const favourites = [];

function initApp() {
    
    const favouritesButton = document.getElementById("favourites-button");
    favouritesButton.onclick = () => displayFavouritesView(favourites);

    const cartButton = document.getElementById("cart-button");
    cartButton.onclick = () => displayCartView(cart);

    displayProductsView(products, cart, favourites);
}

document.addEventListener("DOMContentLoaded", initApp);


 
