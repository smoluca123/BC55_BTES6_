import { $a, $all } from './shortEle.js';
import { handleRender } from './handleRender.js';

export default function handleActionTable(listPerson) {
  return (e) => {
    const idEle = e.target.id;
    switch (idEle) {
      case 'btnDeletePerson':
        const idPerson = e.target.getAttribute('keyPerson');
        listPerson.deletePerson(idPerson);
        handleRender(listPerson.persons);
    }
  };
}
