//not yet sure how to implement it on cli, so ive added it on seeder
const { faker } = require("@faker-js/faker");

const createDefinition = () => {
  return {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    address: faker.address.city(),
    postcode: faker.address.zipCode(),
    contactNumber: faker.phone.number(),
    email: faker.internet.email(),
    username: faker.internet.userName(),
    password: faker.internet.password(),
  };
};

const createUser = (count = 10) => {
  let users = [];

  for (i = 0; i < count; i++) {
    users.push(createDefinition());
  }
  return users;
};

module.exports = createUser;
