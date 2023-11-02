import { $a, $all } from './shortEle.js';
import { handleModal } from './handleChangeModal.js';
import { addPerson } from './addPerson.js';
import { ListPerson } from '../models/ListPerson.js';
import handleActionTable from './handleAction.js';
import { handleRender } from './handleRender.js';
import { setLocalStorage, getLocalStorage } from './localStorage.js';
import { handleSelectType } from './handleSelectTypeTable.js';
import { resetForm } from './resetForm.js';
import { getPersonInfo } from './getPersonInfo.js';

const listPerson = new ListPerson();
//get local storage
listPerson.persons =
  getLocalStorage('persons') || setLocalStorage('persons', listPerson.persons);
//render
handleRender(listPerson.persons);

// handle modal action
$a('#typePersonModal').addEventListener('change', handleModal);
$a('#btnAddPerson').addEventListener('click', () => {
  const status = addPerson(listPerson);
  if (status) {
    $a('#btnDong').click();
  }
});
$a('#btnCapNhat').addEventListener('click', () => {
  const person = getPersonInfo();
  listPerson.updatePerson(person);
  handleRender(listPerson.persons);
  setLocalStorage('persons', listPerson.persons);
  $a('#btnDong').click();
});

//handle select type person table
$a('#typePersonSelect').onchange = () => {
  handleSelectType(listPerson);
};

// handle action table
$a('.myTable').addEventListener('click', handleActionTable(listPerson));

$a('#btnThem').addEventListener('click', resetForm);
