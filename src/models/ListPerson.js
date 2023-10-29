export class ListPerson {
  constructor() {
    this.persons = [];
  }

  deletePerson(id) {
    const index = this.persons.findIndex(({ ma }) => ma === id);
    this.persons.splice(index, 1);
  }
}
