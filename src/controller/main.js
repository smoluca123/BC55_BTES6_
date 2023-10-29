import { $a, $all } from './shortEle.js';
import { handleModal } from './handleChangeModal.js';
import { addPerson } from './addPerson.js';
import { ListPerson } from '../models/ListPerson.js';
import handleActionTable from './handleAction.js';
import { handleRender } from './handleRender.js';
import { setLocalStorage, getLocalStorage } from './localStorage.js';

const listPerson = new ListPerson();
listPerson.persons =
  getLocalStorage('listPerson') ||
  setLocalStorage('listPerson', listPerson.persons);
// console.log(listPerson.persons);
handleRender(listPerson.persons);
$a('#typePersonModal').addEventListener('change', handleModal);

$a('#btnAddPerson').addEventListener('click', () => {
  addPerson(listPerson);
  setLocalStorage('listPerson', listPerson.persons);
});

// handle action table
$a('.myTable').addEventListener('click', handleActionTable(listPerson));
