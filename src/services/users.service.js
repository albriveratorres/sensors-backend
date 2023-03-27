const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');

class UsersService {
  constructor() {
    this.users = [{ email: 'pablo_picasso@ecosat.com.mx', password: 123456 }];
  }
  async find() {
    return this.users;
  }

  async findOne(body) {
    console.log(body);
    const user = this.users.find(
      (e) => e.email == body.email && e.password == body.password
    );
    if (!user) {
      throw boom.notFound('User Not Found');
    }
    return user;
  }
}

module.exports = UsersService;
