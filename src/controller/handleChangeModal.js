import { $a, $all } from './shortEle.js';
import { fieldStudent, fieldEmployee, fieldCustomer } from './customField.js';

export function handleModal() {
  const selectValue = $a('#typePersonModal');

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
