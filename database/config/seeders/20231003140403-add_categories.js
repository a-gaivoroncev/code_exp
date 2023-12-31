'use strict';

// eslint-disable-next-line
const uuid = require('uuid').v4;

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.bulkInsert(
        'categories',
        [
          {
            name: 'Одежда',
          },
          {
            name: 'Электроника',
          },
          {
            name: 'Детские товары',
          },
          {
            name: 'Продукты питания',
          },
        ],
        { transaction },
      );
    });
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('categories', null, {});
  },
};
