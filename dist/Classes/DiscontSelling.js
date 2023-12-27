"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscontSelling = void 0;
const AbstractSelling_1 = require("./AbstractSelling");
class DiscontSelling extends AbstractSelling_1.AbstractSelling {
    discont = 10;
    constructor(product, count) {
        super(product, count);
    }
    getPrice() {
        return ((this.product.price - this.discont) * this._count);
    }
}
exports.DiscontSelling = DiscontSelling;
