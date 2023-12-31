import Person from './Person.js';

export class Employee extends Person {
  constructor(name, email, ma, address, workingDays, salaryDay) {
    super(name, email, ma, address);
    this.workingDays = +workingDays;
    this.salaryDay = +salaryDay;
  }
  getSalary() {
    return this.workingDays * this.salaryDay;
  }
}
