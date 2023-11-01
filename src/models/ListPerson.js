export class ListPerson {
  constructor() {
    this.persons = [];
  }

  getPersonById(id) {
    return this.persons.find(({ ma }) => {
      return ma === id;
    });
  }
  getPersonsByType(type) {
    switch (type) {
      case 'Student':
      case 'Employee':
      case 'Customer':
        return this.persons.filter((person) => {
          return person.constructor.name === type;
        });
      default:
        return this.persons;
    }
  }
  updatePerson(person) {
    const index = this.persons.findIndex(({ ma }) => ma === person.ma);
    this.persons[index] = person;
  }
  deletePerson(id) {
    const index = this.persons.findIndex(({ ma }) => ma === id);
    this.persons.splice(index, 1);
  }
}
