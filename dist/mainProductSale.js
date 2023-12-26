"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractSelling_1 = require("./AbstractSelling");
const Product_1 = require("./Product");
const arr = [
    { name: 'banana', price: 100, count: 20, countDiscont: 0 },
    { name: 'orange', price: 70, count: 50, countDiscont: 0 },
    { name: 'grape', price: 50, count: 40, countDiscont: 0 },
    { name: 'tomato', price: 40, count: 30, countDiscont: 0 },
    { name: 'lemon', price: 80, count: 20, countDiscont: 5 },
    { name: 'plum', price: 60, count: 120, countDiscont: 30 },
    { name: 'apple', price: 80, count: 20, countDiscont: 20 },
    { name: 'kiwi', price: 120, count: 10, countDiscont: 3 },
];
const listProductsSelling = arr.map((item, i) => {
    let product;
    if (i <= 3) {
        product = new AbstractSelling_1.DiscontSelling(new Product_1.Product(item.name, item.price), item.count);
    }
    else {
        product = new AbstractSelling_1.CountDiscontSelling(new Product_1.Product(item.name, item.price), item.count, item.countDiscont);
    }
    return product;
});
console.log(listProductsSelling);
console.log('==========================');
console.log('Отсортированный массив (по возрастанию цены за единицу продукта):');
listProductsSelling.sort((a, b) => {
    return a.compare(b);
});
console.log(listProductsSelling);
