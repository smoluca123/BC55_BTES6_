import { $a, $all } from './shortEle.js';
import { handleModal } from './handleChangeModal.js';
import { addPerson } from './addPerson.js';
import { ListPerson } from '../models/ListPerson.js';
import handleActionTable from './handleAction.js';
import { handleRender, renderCustomTable } from './handleRender.js';
// import { setLocalStorage, getLocalStorage } from './localStorage.js';
import { fieldStudent, fieldCustomer, fieldEmployee } from './customField.js';
const listPerson = new ListPerson();
handleRender(listPerson.persons);
$a('#typePersonModal').addEventListener('change', handleModal);

$a('#btnAddPerson').addEventListener('click', () => {
  addPerson(listPerson);
});

//handle select type person table
$a('#typePersonSelect').onchange = () => {
  const personType = $a('#typePersonSelect').value;
  const fields =
    personType === 'Student'
      ? fieldStudent
      : personType === 'Employee'
      ? fieldEmployee
      : fieldCustomer;
  const newListPersons = listPerson.getPersonsByType(personType);
  renderCustomTable(newListPersons, personType, fields);
};

// handle action table
$a('.myTable').addEventListener('click', handleActionTable(listPerson));
