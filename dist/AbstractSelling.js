"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountDiscontSelling = exports.DiscontSelling = void 0;
class AbstractSelling {
    product;
    count = 0;
    constructor(product, count) {
        this.product = product;
        this.count = count;
    }
    get getProduct() {
        return this.product;
    }
    set setProduct(product) {
        this.product = product;
    }
    get getCount() {
        return this.count;
    }
    set setCount(count) {
        this.count = count;
    }
    compare(compareProduct) {
        if (this.product.price > compareProduct.product.price) {
            return -1;
        }
        if (this.product.price < compareProduct.product.price) {
            return 1;
        }
        return 0;
    }
}
class DiscontSelling extends AbstractSelling {
    discont = 10;
    constructor(product, count) {
        super(product, count);
    }
    getPrice() {
        console.log(`Общая сумма товара "${this.product.title}" составляет ${this.count * (this.product.price - this.discont)}$`);
    }
}
exports.DiscontSelling = DiscontSelling;
class CountDiscontSelling extends AbstractSelling {
    countDiscontGoods;
    constructor(product, count, countDiscontGoods) {
        super(product, count);
        this.countDiscontGoods = countDiscontGoods;
    }
    getPrice() {
        const result = this.count >= this.countDiscontGoods ?
            this.count * this.product.price * 0.1 : this.count * (this.product.price - 10);
        console.log(`Общая сумма товара "${this.product.title}" составляет ${result}$`);
    }
}
exports.CountDiscontSelling = CountDiscontSelling;
