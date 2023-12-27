"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Job_1 = require("./Classes/Job");
const Person_1 = require("./Classes/Person");
const CountDiscontSelling_1 = require("./Classes/CountDiscontSelling");
const DiscontSelling_1 = require("./Classes/DiscontSelling");
const Product_1 = require("./Classes/Product");
// ================ Task-1 ==========================
const driver = new Job_1.Job('водитель', 40000);
const seller = new Job_1.Job('продавец', 30000);
const lawyer = new Job_1.Job('юрист', 45000);
const person1 = new Person_1.Person('Влад', driver);
const person2 = new Person_1.Person('Петр', seller);
const person3 = new Person_1.Person('Стив', lawyer);
console.log(' person1: ', person1);
// Сотрудник работает
person2.work();
// Меняем профессию 
person2.setJob = driver;
// Сотрудник работает
person2.work();
// Выводим ЗП сотрудника
console.log(person2.getSalary());
// ================ Task-2 ==========================
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
        product = new DiscontSelling_1.DiscontSelling(new Product_1.Product(item.name, item.price), item.count);
    }
    else {
        product = new CountDiscontSelling_1.CountDiscontSelling(new Product_1.Product(item.name, item.price), item.count, item.countDiscont);
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
console.log('==========================');
console.log("Информация о товаре 'banana'");
const banana = listProductsSelling[0];
console.log('banana: ', banana);
const sum = banana.getPrice();
console.log('sum: ', sum);
console.log('==========================');
console.log("Информация о товаре 'apple'");
const apple = listProductsSelling[6];
console.log('apple: ', apple);
const sumApple = apple.getPrice();
console.log('sum: ', sumApple);
