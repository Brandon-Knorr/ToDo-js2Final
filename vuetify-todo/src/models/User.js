export default class User {
  constructor(id = null, data = {}) {
    this.id = id;
    this.firstName = data.firstName || '';
    this.lastName = data.lastName || '';
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  toFirestore() {
    return {
      firstName: this.firstName,
      lastName: this.lastName
    };
  }
}
