import { $a, $all } from './shortEle.js';

export const showDataPerson = (personType, person) => {
  const { ma, name, email, address } = person;
  $a('#id').value = ma;
  $a('#name').value = name;
  $a('#email').value = email;
  $a('#address').value = address;
  switch (personType) {
    case 'Student':
      const { diemToan, diemLy, diemHoa } = person;
      $a('#diemToan').value = diemToan;
      $a('#diemLy').value = diemLy;
      $a('#diemHoa').value = diemHoa;
      break;
    case 'Employee':
      const { workingDays, salaryDay } = person;
      $a('#workingDays').value = workingDays;
      $a('#salaryDay').value = salaryDay;
      break;
    case 'Customer':
      const { companyName, valuation, review } = person;
      $a('#companyName').value = companyName;
      $a('#valuation').value = valuation;
      $a('#review').value = review;
      break;
  }
};
