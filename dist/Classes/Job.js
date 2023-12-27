"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Job = void 0;
class Job {
    _role;
    _salary;
    constructor(role, salary) {
        this._role = role;
        this._salary = salary;
    }
    get salary() {
        return this._salary;
    }
    work(personName) {
        console.log(`${personName} сейчас работает как ${this._role}`);
    }
}
exports.Job = Job;
;
