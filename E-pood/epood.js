class Product {
    constructor (id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }
    describe() {
        return `Title:${this.name}, Price:${this.price}, Category:${this.category};`
    }
    static discoutedPrice (price, discount) {
        return price - (price*discount) / 100;

    }
}
class Cart {
    constructor () {
        this.items = [];
    }
    addProduct(product, quantity) {
       this.items.push({product, quantity})
    }
    removeProduct(productId) {
        this.items = this.items.filter((item)=>item.product.id !==productId)   
    }
    get totalItems() {
        return this.items.reduce((total, item)=> total + item.quantity,0);
    }
    calculateIdTotal() {
        return this.items.reduce((total, item) => total + item.product.price * item.product.quantity,0)
    }

}
class Order {
    constructor(cart) {
      this.orderDate = new Date();
      this.cart = cart;
    }
  
    printOrder() {
      console.log(`Order Date: ${this.orderDate}`);
      console.log("Items:");
      this.cart.items.forEach((item) => {
        console.log(
          `- ${item.product.name}, €${item.product.price}, Quantity: ${item.quantity}`
        );
      });
      console.log(`Total: €${this.cart.calculateTotal()}`);
    }
  }
  class Customer {
    constructor(name) {
      this.name = name;
      this.orderHistory = [];
    }
  
    placeOrder(cart) {
      const order = new Order(cart);
      this.orderHistory.push(order);
    }
  
    printOrderHistory() {
      console.log(`Order History for Customer: ${this.name}`);
      if (this.orderHistory.length === 0) {
        console.log("No orders found.");
        return;
      }
  
      this.orderHistory.forEach((order, index) => {
        console.log(`Order ${index + 1}:`);
        order.printOrder();
        console.log("------------");
      });
    }
  }