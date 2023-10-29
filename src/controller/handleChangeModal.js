import { $a, $all } from './shortEle.js';

export function handleModal() {
  const selectValue = $a('#typePersonModal');
  const fieldStudent = [
    { field: 'diemToan', label: 'Diem Toan', icon: 'fa fa-star' },
    { field: 'diemLy', label: 'Diem Ly', icon: 'fa fa-star' },
    { field: 'diemHoa', label: 'Diem Hoa', icon: 'fa fa-star' },
  ];
  const fieldEmployee = [
    {
      field: 'workingDays',
      label: 'Số ngày làm việc',
      icon: 'fa fa-briefcase',
    },
    { field: 'salaryDay', label: 'Lương ngày', icon: 'fa fa-money' },
  ];
  const fieldCustomer = [
    { field: 'companyName', label: 'Tên công ty', icon: 'fa fa-building' },
    { field: 'valuation', label: 'Trị giá hóa đơn', icon: 'fa fa-building' },
    { field: 'review', label: 'Đánh giá', icon: 'fa fa-building' },
  ];
  let content = '';
  switch (selectValue.value) {
    case 'Student':
      content = fieldStudent.reduce((prev, { field, label, icon }) => {
        return prev + customModal(field, label, icon);
      }, '');
      $a('#modalPerson').innerHTML = content;
      break;
    case 'Employee':
      content = fieldEmployee.reduce((prev, { field, label, icon }) => {
        return prev + customModal(field, label, icon);
      }, '');
      $a('#modalPerson').innerHTML = content;
      break;
    case 'Customer':
      content = fieldCustomer.reduce((prev, { field, label, icon }) => {
        return prev + customModal(field, label, icon);
      }, '');
      $a('#modalPerson').innerHTML = content;
      break;
    default:
      $a('#modalPerson').innerHTML = '';
      break;
  }
}

function customModal(field, label, icon) {
  return `
    <div class="form-group">
        <div class="input-group">
            <div class="input-group-prepend">
                <span class="input-group-text"><i class="${icon}"></i></span>
            </div>
            <input type="text" name="${field}" id="${field}" class="form-control input-sm" placeholder="${label}">
        </div>
        <span class="sp-thongbao" id="tb${field}"></span>
    </div>
    `;
}
