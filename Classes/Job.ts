export class Job {
  private _role: string;
  private _salary: number; 

  constructor(role: string, salary: number) {
    this._role = role;
    this._salary = salary;
  }

  get salary(): number {
    return this._salary;
  }

  work(personName: string): void {
    console.log(`${personName} сейчас работает как ${this._role}`);
  }
};