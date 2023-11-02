import { $a, $all } from './shortEle.js';
import { Student } from '../models/Student.js';
import { Employee } from '../models/Employee.js';
import { Customer } from '../models/Customer.js';
import {
  checkEmpty,
  checkNumber,
  checkSelected,
  checkEmail,
} from './validatation/validate.js';

export const getPersonInfo = () => {
  const selectValue = $a('#typePersonModal');
  const idValue = $a('#id').value;
  const nameValue = $a('#name').value;
  const emailValue = $a('#email').value;
  const addressValue = $a('#address').value;
  const isValid = [
    checkSelected(
      selectValue.selectedIndex,
      'Vui lòng chọn loại đối tượng',
      '#tbPersonModal'
    ),
    checkEmpty(idValue, 'Vui lòng không bỏ trống', '#tbID'),
    checkEmpty(nameValue, 'Vui lòng không bỏ trống', '#tbTen'),
    checkEmpty(emailValue, 'Vui lòng không bỏ trống', '#tbEmail'),
    checkEmail(emailValue, 'Vui lòng email hợp lệ', '#tbEmail'),
    checkEmpty(addressValue, 'Vui lòng không bỏ trống', '#tbAddress'),
  ];

  let validPerson = [];
  let person = '';
  switch (selectValue.value) {
    case 'Student':
      const diemToanValue = $a('#diemToan').value;
      const diemLyValue = $a('#diemLy').value;
      const diemHoaValue = $a('#diemHoa').value;
      validPerson = [
        checkEmpty(diemToanValue, 'Vui lòng không để trống', '#tbDiemToan'),
        checkNumber(diemToanValue, 'Vui lòng nhập số hợp lệ', '#tbDiemToan'),
        checkEmpty(diemLyValue, 'Vui lòng không để trống', '#tbDiemLy'),
        checkNumber(diemLyValue, 'Vui lòng nhập số hợp lệ', '#tbDiemLy'),
        checkEmpty(diemHoaValue, 'Vui lòng không để trống', '#tbDiemHoa'),
        checkNumber(diemHoaValue, 'Vui lòng nhập số hợp lệ', '#tbDiemHoa'),
      ];
      isValid.push(...validPerson);
      const student = new Student(
        nameValue,
        emailValue,
        idValue,
        addressValue,
        diemToanValue,
        diemLyValue,
        diemHoaValue
      );
      person = student;
      break;
    case 'Employee':
      const workingDays = $a('#workingDays').value;
      const salaryDay = $a('#salaryDay').value;
      validPerson = [
        checkEmpty(workingDays, 'Vui lòng không để trống', '#tbWorkingDays'),
        checkNumber(workingDays, 'Vui lòng nhập số hợp lệ', '#tbWorkingDays'),
        checkEmpty(salaryDay, 'Vui lòng không để trống', '#tbSalaryDay'),
        checkNumber(salaryDay, 'Vui lòng nhập số hợp lệ', '#tbSalaryDay'),
      ];
      isValid.push(...validPerson);
      const employee = new Employee(
        nameValue,
        emailValue,
        idValue,
        addressValue,
        workingDays,
        salaryDay
      );
      person = employee;
      break;
    case 'Customer':
      const companyName = $a('#companyName').value;
      const valuation = $a('#valuation').value;
      const review = $a('#review').value;
      validPerson = [
        checkEmpty(companyName, 'Vui lòng không để trống', '#tbCompanyName'),
        checkEmpty(valuation, 'Vui lòng không để trống', '#tbValuation'),
        checkNumber(valuation, 'Vui lòng nhập số hợp lệ', '#tbValuation'),
        checkEmpty(review, 'Vui lòng không để trống', '#tbReview'),
      ];
      isValid.push(...validPerson);
      const customer = new Customer(
        nameValue,
        emailValue,
        idValue,
        addressValue,
        companyName,
        valuation,
        review
      );
      person = customer;
      break;
  }
  if (isValid.includes(false)) return false;
  return person;
};
