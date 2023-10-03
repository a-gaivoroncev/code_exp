'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.bulkInsert(
        'roles',
        [
          {
            id: 0,
            name: 'SUPERADMIN',
          },
          {
            id: 1,
            name: 'ADMIN',
          },
          {
            id: 2,
            name: 'USER',
          },
        ],
        { transaction },
      );
    });
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('roles', null, {});
  },
};
