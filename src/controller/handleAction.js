import { $a, $all } from './shortEle.js';
import { handleRender } from './handleRender.js';
import { setLocalStorage } from './localStorage.js';
import { checkPersonType } from './checkPersonType.js';
import { handleModal } from './handleChangeModal.js';
import { showDataPerson } from './showDataPerson.js';

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
      case 'btnEditPerson':
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
    }
  };
}
