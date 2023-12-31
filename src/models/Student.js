import Person from './Person.js';

export class Student extends Person {
  constructor(name, email, ma, address, diemToan, diemLy, diemHoa) {
    super(name, email, ma, address);
    this.diemToan = +diemToan;
    this.diemLy = +diemLy;
    this.diemHoa = +diemHoa;
  }
  diemTrungBinh() {
    return Math.round((this.diemToan + this.diemLy + this.diemHoa) / 3);
  }
}
