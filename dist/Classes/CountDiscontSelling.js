"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountDiscontSelling = void 0;
const AbstractSelling_1 = require("./AbstractSelling");
class CountDiscontSelling extends AbstractSelling_1.AbstractSelling {
    countDiscontGoods;
    constructor(product, count, countDiscontGoods) {
        super(product, count);
        this.countDiscontGoods = countDiscontGoods;
    }
    getPrice() {
        const result = this.count >= this.countDiscontGoods ?
            this.count * this.product.price * 0.1 : this.count * (this.product.price - 10);
        return result * this._count;
    }
}
exports.CountDiscontSelling = CountDiscontSelling;
