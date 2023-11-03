import { $a, $all } from './shortEle.js';
import { handleModal } from './handleChangeModal.js';
export const resetForm = () => {
  $a('#typePersonModal').value = '';
  $a('#id').disabled = false;
  const inputs = $all('#formModalPerson input');
  [...inputs].map((input) => {
    input.value = '';
  });
  $a('#btnAddPerson').style.display = 'block';
  $a('#btnCapNhat').style.display = 'none';
  handleModal();
};
