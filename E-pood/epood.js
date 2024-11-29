

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