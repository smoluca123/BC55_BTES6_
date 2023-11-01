import { Student } from '../models/Student.js';
import { Employee } from '../models/Employee.js';
import { Customer } from '../models/Customer.js';
import { checkPersonType } from './checkPersonType.js';

const getLocalStorage = (key) => {
  if (!localStorage.getItem(key)) return null;

  const data = JSON.parse(localStorage.getItem(key));
  const personConvert = data.map((person) => {
    const { ma, name, email, address } = person;
    const type = checkPersonType(person);
    switch (type) {
      case 'Student':
        const { diemToan, diemLy, diemHoa } = person;

        return new Student(name, email, ma, address, diemToan, diemLy, diemHoa);
      case 'Employee':
        const { workingDays, salaryDay } = person;

        return new Employee(name, email, ma, address, workingDays, salaryDay);
      case 'Customer':
        const { companyName, valuation, review } = person;

        return new Customer(
          name,
          email,
          ma,
          address,
          companyName,
          valuation,
          review
        );
      default:
        return null;
    }
  });
  return personConvert;
};
const setLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
  return getLocalStorage(key);
};

export { setLocalStorage, getLocalStorage };
