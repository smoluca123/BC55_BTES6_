import { $a, $all } from './shortEle.js';
export function handleRender(arr) {
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
                <button class="btn btn-primary">Edit</button>
                <button class="btn btn-danger" id="btnDeletePerson" keyPerson="${ma}">Delete</button>
            </td>
        </tr>
        `
    );
  }, '');
  $a('#tableDanhSach').innerHTML = content;
}
