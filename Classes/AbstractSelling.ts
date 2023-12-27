import { Product } from "./Product";

export abstract class AbstractSelling {
  _product: Product;
  _count: number = 0;

  constructor(product: Product, count: number) {
    this._product = product;
    this._count = count;
  }

  get product(): Product {
    return this._product;
  }

  set product(product: Product) {
    this._product = product;
  }

  get count(): number {
    return this._count;
  }

  set count(count: number) {
    this._count = count;
  }

  compare(compareProduct: AbstractSelling): number {
    if (this.product.price > compareProduct.product.price) {
      return -1;
    }
    if (this.product.price < compareProduct.product.price) {
      return 1;
    }  
    return 0;
    }    
  
  abstract getPrice(): number;    
}
