import { Product } from "./Product";

abstract class AbstractSelling {
  product: Product;
  count: number = 0;

  constructor(product: Product, count: number) {
    this.product = product;
    this.count = count;
  }

  get getProduct(): Product {
    return this.product;
  }

  set setProduct(product: Product) {
    this.product = product;
  }

  get getCount(): number {
    return this.count;
  }

  set setCount(count: number) {
    this.count = count;
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
  

  abstract getPrice(): void;    
}

export class DiscontSelling extends AbstractSelling {
  discont: number = 10;
  constructor(product: Product, count: number) {
    super(product, count);
  }

  getPrice(): void {
    console.log(`Общая сумма товара "${this.product.title}" составляет ${this.count * (this.product.price - this.discont)}$`); 
  } 
}

export class CountDiscontSelling extends AbstractSelling {
  countDiscontGoods: number;

  constructor(product: Product, count: number, countDiscontGoods: number) {
    super(product, count);
    this.countDiscontGoods = countDiscontGoods;
  }

  getPrice(): void {
    const result = this.count >= this.countDiscontGoods ?
      this.count * this.product.price * 0.1 : this.count * (this.product.price - 10)
    console.log(`Общая сумма товара "${this.product.title}" составляет ${result}$`);     
  }

}