"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    _title;
    _price;
    constructor(title, price) {
        this._title = title;
        this._price = price;
    }
    get title() {
        return this._title;
    }
    set title(title) {
        this._title = title;
    }
    get price() {
        return this._price;
    }
    set price(price) {
        this._price = price;
    }
}
exports.Product = Product;
