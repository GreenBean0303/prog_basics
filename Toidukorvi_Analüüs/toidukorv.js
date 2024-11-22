let shoppingCart = [
    { name: "apple", quantity: 4 },
    { name: "banana", quantity: 2 },
    { name: "orange", quantity: 5 },
    { name: "milk", quantity: 1 },
    { name: "bread", quantity: 2 },
]

const totalQuantity = shoppingCart.reduce((sum, item) => sum + item.quantity,0);
console.log("Koguarv:",totalQuantity)

shoppingCart.push({name: "yogurt", quantity: 3 });
console.log("Uus ostukorv:",shoppingCart);

const appleIndex = shoppingCart.findIndex(item => item.name === "apple");
if (appleIndex !== -1) {
    shoppingCart[appleIndex].quantity += 3;
} else {
    shoppingCart.push({ name: "apple", quantity: 3});
}
console.log("Muudetud ostukorv");
console.log(shoppingCart);


const bananaIndex = shoppingCart.findIndex(item => item.name === "banana");
if (bananaIndex !== -1) {
    shoppingCart.splice(bananaIndex, 1);
}
console.log("Muudetud ostukorv");
console.log(shoppingCart);

const itemName = shoppingCart.map(item => item.name);
console.log("Toiduainete nimed:");

const hasMilk = shoppingCart.some(item => item.name === "milk");
console.log("On olemas toode nimega milk:", hasMilk);

shoppingCart.sort((a, b) => a.quantity - b.quantity);
console.log("Sorteeritud ostukorv:");
console.log(shoppingCart);

const egg = { name: "egg", quantity: 12 };
shoppingCart.push(egg);
console.log("Muudetud ostukorv pärast muna lisamist:");
console.log(shoppingCart);



