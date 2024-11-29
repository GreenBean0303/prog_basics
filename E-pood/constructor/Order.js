export class Order {
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