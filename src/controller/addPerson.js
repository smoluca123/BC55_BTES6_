import { $a, $all } from './shortEle.js';
import { Student } from '../models/Student.js';
import { handleRender } from './handleRender.js';

function getPersonInfo() {
  const selectValue = $a('#typePersonModal');
  const idValue = $a('#id').value;
  const nameValue = $a('#name').value;
  const emailValue = $a('#email').value;
  const addressValue = $a('#address').value;
  switch (selectValue.value) {
    case 'Student':
      const diemToanValue = $a('#diemToan').value;
      const diemLyValue = $a('#diemLy').value;
      const diemHoaValue = $a('#diemHoa').value;
      const student = new Student(
        nameValue,
        emailValue,
        idValue,
        addressValue,
        diemToanValue,
        diemLyValue,
        diemHoaValue
      );
      return student;
    case 'Employee':
      const workingDays = $a('#workingDays').value;
      const salaryDay = $a('#salaryDay').value;
      const employee = new Student(
        nameValue,
        emailValue,
        idValue,
        addressValue,
        workingDays,
        salaryDay
      );
      return employee;
    case 'Customer':
      const companyName = $a('#companyName').value;
      const valuation = $a('#valuation').value;
      const review = $a('#review').value;
      const customer = new Student(
        nameValue,
        emailValue,
        idValue,
        addressValue,
        companyName,
        valuation,
        review
      );
      return customer;
  }
}

export function addPerson(listPerson) {
  const person = getPersonInfo();
  listPerson.persons.push(person);
  handleRender(listPerson.persons);
}
