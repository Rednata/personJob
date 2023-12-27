import { AbstractSelling } from "./AbstractSelling";
import { Product } from "./Product";

export class CountDiscontSelling extends AbstractSelling {
  countDiscontGoods: number;

  constructor(product: Product, count: number, countDiscontGoods: number) {
    super(product, count);
    this.countDiscontGoods = countDiscontGoods;
  }

  getPrice(): number {
    const result = this.count >= this.countDiscontGoods ?
      this.count * this.product.price * 0.1 : this.count * (this.product.price - 10);
    return result * this._count;
  }
}