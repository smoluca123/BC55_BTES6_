import { $a, $all } from './shortEle.js';
const getKeyPerson = (person) => {
  const keyList = [];
  for (const key in person) {
    keyList.push(key);
  }
  return keyList;
};
const getColTable = (fields) => {
  return `
    <tr>
      <th class="nowrap">
        <span class="mr-1">STT</span>
        <i class="fa fa-arrow-up" id="SapXepTang"></i>
        <i class="fa fa-arrow-down" id="SapXepGiam"></i>
      </th>
      <th>ID</th>
      <th>Họ và tên</th>
      <th>Email</th>
      <th>Địa chỉ</th>
      ${fields.reduce((prev, { name, label, icon }) => {
        return (
          prev + `<th id="${name}Col"><i class="${icon}"></i> ${label}</th>`
        );
      }, '')}
      <th><em class="fa fa-cog"></em>Action</th>
    </tr>
  `;
};

export const handleRender = (arr) => {
  const content = arr.reduce((prev, { ma, name, email, address }, index) => {
    return (
      prev +
      `
        <tr>
            <td>${index + 1}</td>
            <td>${ma}</td>
            <td>${name}</td>
            <td>${email}</td>
            <td>${address}</td>
            <td>
                
                <button class="btn btn-primary" data-toggle="modal"
                data-target="#myModal" id="btnEditPerson" keyPerson="${ma}">Edit</button>
                <button class="btn btn-danger" id="btnDeletePerson" keyPerson="${ma}">Delete</button>
            </td>
        </tr>
        `
    );
  }, '');
  $a('.table thead').innerHTML = getColTable([]);
  $a('#tableDanhSach').innerHTML = content;
};

export const renderCustomTable = (persons, personType, fields) => {
  let content = '';
  switch (personType) {
    case 'Student':
    case 'Employee':
    case 'Customer': {
      content = persons.reduce((prev, person, index) => {
        return (
          prev +
          `
            <tr>
              <td>${index + 1}</td>
              ${getKeyPerson(person).reduce((prev, key) => {
                return prev + `<td>${person[key]}</td>`;
              }, '')}
              <td>
                ${
                  person.diemTrungBinh
                    ? `<button id="tinhDTB" class="btn btn-success" keyPerson="${person.ma}">
                  Tính DTB</button>`
                    : ''
                }
                ${
                  person.getSalary
                    ? `<button id="tinhLuong" class="btn btn-success" keyPerson="${person.ma}">
                  Tính Lương</button>`
                    : ''
                }
                  <button class="btn btn-primary" data-toggle="modal"
									data-target="#myModal" id="btnEditPerson" keyPerson="${person.ma}">Edit</button>
                  <button class="btn btn-danger" id="btnDeletePerson" keyPerson="${
                    person.ma
                  }">Delete</button>
              </td>
            </tr>
          `
        );
      }, '');
      break;
    }
    default:
      handleRender(persons);
      return;
  }
  $a('.table thead').innerHTML = getColTable(fields);
  $a('#tableDanhSach').innerHTML = content;
};
