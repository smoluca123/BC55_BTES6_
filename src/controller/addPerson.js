import { $a, $all } from './shortEle.js';
import { Student } from '../models/Student.js';
import { handleRender } from './handleRender.js';
import { Employee } from '../models/Employee.js';
import { Customer } from '../models/Customer.js';
import { setLocalStorage } from './localStorage.js';
import { getPersonInfo } from './getPersonInfo.js';

export function addPerson(listPerson) {
  const person = getPersonInfo();
  listPerson.persons.push(person);
  handleRender(listPerson.persons);
  setLocalStorage('persons', listPerson.persons);
}
