'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      firstName:'Wendorf',
      lastName:'Tudela',
      email: 'villegaswendorf@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
down: (queryInterface, Sequelize) => {
  return queryInterface.bulkDelete('Users', null, {});
}
};