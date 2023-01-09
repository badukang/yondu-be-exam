"use strict";
const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    return queryInterface.bulkInsert("Users", [
      {
        firstName: "admin",
        lastname: "admin",
        address:
          "261B / 262 Level 2 Power Plant, Amapola Street, Rockwell Poblacion",
        postcode: "3004",
        contactNumber: "898-2322",
        email: "admin@gmail.com",
        username: "admin",
        password: bcrypt.hashSync("1234", 10),
        is_admin: 1,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("Users", null, {});
  },
};
