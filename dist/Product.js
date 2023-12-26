"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    title;
    price;
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    get getTitle() {
        return this.title;
    }
    set setTitle(title) {
        this.title = title;
    }
    get getPrice() {
        return this.price;
    }
    set setPrice(price) {
        this.price = price;
    }
}
exports.Product = Product;
