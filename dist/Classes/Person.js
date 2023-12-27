"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Person {
    _job;
    _name;
    constructor(name, job) {
        this._job = job;
        this._name = name;
    }
    set setJob(job) {
        this._job = job;
    }
    work() {
        this._job.work(this._name);
    }
    getSalary() {
        return this._job.salary;
    }
}
exports.Person = Person;
