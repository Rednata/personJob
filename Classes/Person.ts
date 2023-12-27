import { Job } from "./Job";

export class Person {
  private _job: Job;
  private _name: string;

  constructor(name: string, job: Job) {
    this._job = job;
    this._name = name;
  }

  set setJob(job: Job) {
    this._job = job;
  }

  work() {
    this._job.work(this._name);
    
  }

  getSalary() {
    return this._job.salary;
  }
}