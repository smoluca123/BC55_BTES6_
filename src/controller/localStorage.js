import { Student } from '../models/Student.js';
import { Employee } from '../models/Employee.js';
import { Customer } from '../models/Customer.js';

const setLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
  return value;
};

const getLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key)) || null;
};

export { setLocalStorage, getLocalStorage };
