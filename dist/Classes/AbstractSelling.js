"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractSelling = void 0;
class AbstractSelling {
    _product;
    _count = 0;
    constructor(product, count) {
        this._product = product;
        this._count = count;
    }
    get product() {
        return this._product;
    }
    set product(product) {
        this._product = product;
    }
    get count() {
        return this._count;
    }
    set count(count) {
        this._count = count;
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
exports.AbstractSelling = AbstractSelling;
