import { $a, $all } from './shortEle.js';
import { fieldCustomer, fieldEmployee, fieldStudent } from './customField.js';
import { renderCustomTable } from './handleRender.js';

export const handleSelectType = (listPerson) => {
  const personType = $a('#typePersonSelect').value;
  const fields =
    personType === 'Student'
      ? fieldStudent
      : personType === 'Employee'
      ? fieldEmployee
      : personType === 'Customer'
      ? fieldCustomer
      : null;
  const newListPersons = listPerson.getPersonsByType(personType);
  renderCustomTable(newListPersons, personType, fields);
};
