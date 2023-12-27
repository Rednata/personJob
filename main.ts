class Job {
  role: string;
  salary: number; 

  constructor(role: string, salary: number) {
    this.role = role;
    this.salary = salary;
  }

  get getSalary(): number {
    return this.salary;
  }

  work(personName: string): void {
    console.log(`${personName} сейчас работает как ${this.role}`);
  }
};

class Person {
  private job: Job;
  private name: string;

  constructor(name: string, job: Job) {
    this.job = job;
    this.name = name;
  }

  set setJob(job: Job) {
    this.job = job;
  }

  work() {
    this.job.work(this.name);
    
  }

  getSalary() {
    return this.job.getSalary;
  }
}

const driver = new Job('водитель', 40000)
const seller = new Job('продавец', 30000)
const lawyer = new Job('юрист', 45000)

const person1 = new Person('Влад', driver);
const person2 = new Person('Петр', seller);
const person3 = new Person('Стив', lawyer);

console.log(' person1: ',  person1);

// Сотрудник работает
person2.work();

// Меняем профессию 
person2.setJob = driver;

// Сотрудник работает
person2.work();

// Выводим ЗП сотрудника
console.log(person2.getSalary());

