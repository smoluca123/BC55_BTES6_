export class ListPerson {
  constructor() {
    this.persons = [];
  }

  getPersonsByType(type) {
    switch (type) {
      case 'Student':
        return this.persons.filter((person) => {
          return 'diemTrungBinh' in person;
        });
      case 'Employee':
        return this.persons.filter((person) => {
          return 'workingDays' in person;
        });
      case 'Customer':
        return this.persons.filter((person) => {
          return 'companyName' in person;
        });
      default:
        return this.persons;
    }
  }
  deletePerson(id) {
    const index = this.persons.findIndex(({ ma }) => ma === id);
    this.persons.splice(index, 1);
  }
}
