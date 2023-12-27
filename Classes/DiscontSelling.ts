import { AbstractSelling } from "./AbstractSelling";
import { Product } from "./Product";

export class DiscontSelling extends AbstractSelling {
  discont: number = 10;
  constructor(product: Product, count: number) {
    super(product, count);
  }

  getPrice(): number {
    return ((this.product.price - this.discont) * this._count);
  } 
}