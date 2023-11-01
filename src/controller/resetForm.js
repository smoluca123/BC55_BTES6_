import { $a, $all } from './shortEle.js';
export const resetForm = () => {
  const inputs = $all('#formModalPerson input');
  [...inputs].map((input) => {
    input.value = '';
  });
  $a('#btnAddPerson').style.display = 'block';
  $a('#btnCapNhat').style.display = 'none';
};
