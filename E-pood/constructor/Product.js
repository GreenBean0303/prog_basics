export class Product {
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