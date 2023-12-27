export class Product {
  title: string;
  price: number;

  constructor(title: string, price: number) {
    this.title = title;
    this.price = price;
  }

  get getTitle(): string {
    return this.title;
  }

  set setTitle(title: string) {
    this.title = title;
  }

  get getPrice(): number {
    return this.price;
  }

  set setPrice(price: number) {
    this.price = price;
  }
}