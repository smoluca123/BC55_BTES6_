import { $a, $all } from './shortEle.js';
import { handleRender } from './handleRender.js';
import { setLocalStorage } from './localStorage.js';
import { checkPersonType } from './checkPersonType.js';
import { handleModal } from './handleChangeModal.js';
import { showDataPerson } from './showDataPerson.js';
import { swAlert } from './sweetAlert.js';
import { formatCurrency } from './formatCurrency.js';

let isSort = false;
export default function handleActionTable(listPerson) {
  return (e) => {
    const idEle = e.target.id;
    let idPerson = '';
    switch (idEle) {
      case 'btnDeletePerson':
        idPerson = e.target.getAttribute('keyPerson');
        listPerson.deletePerson(idPerson);
        handleRender(listPerson.persons);
        setLocalStorage('persons', listPerson.persons);
        break;
      case 'btnEditPerson': {
        $a('#btnAddPerson').style.display = 'none';
        $a('#btnCapNhat').style.display = 'block';
        $a('#id').disabled = true;
        idPerson = e.target.getAttribute('keyPerson');
        const person = listPerson.getPersonById(idPerson);
        const personType = checkPersonType(person);
        const selecteEle = $a('#typePersonModal');

        selecteEle.value = personType;
        handleModal();
        showDataPerson(personType, person);
        break;
      }
      case 'tinhDTB': {
        idPerson = e.target.getAttribute('keyPerson');
        const person = listPerson.getPersonById(idPerson);
        swAlert(
          'center',
          'success',
          `Điểm trung bình : ${person.diemTrungBinh()}`,
          false
        );
        break;
      }
      case 'tinhLuong': {
        idPerson = e.target.getAttribute('keyPerson');
        const person = listPerson.getPersonById(idPerson);
        swAlert(
          'center',
          'success',
          `Lương : ${formatCurrency(person.getSalary(), 'vi-VN')}`,
          false
        );
        break;
      }
      // short
      case 'sortName':
        if (!isSort) {
          isSort = true;
          setTimeout(() => {
            $a('#sortName span').classList.toggle('fa-arrow-down');
          }, 0);
          const newArr = [...listPerson.persons];
          const arrSort = newArr.sort((a, b) => a.name.localeCompare(b.name));
          handleRender(arrSort);
          return;
        }
        isSort = false;
        handleRender(listPerson.persons);
    }
  };
}
