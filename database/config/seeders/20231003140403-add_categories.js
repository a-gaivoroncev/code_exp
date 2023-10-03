'use strict';

const uuid = require('uuid').v4;

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.bulkInsert(
        'categories',
        [
          {
            id: uuid(),
            name: 'Одежда',
          },
          {
            id: uuid(),
            name: 'Электроника',
          },
          {
            id: uuid(),
            name: 'Детские товары',
          },
          {
            id: uuid(),
            name: 'Продукты питания',
          },
        ],
        { transaction },
      );
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('categories', null, {});
  },
};
