'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.addConstraint(
        'users',
        {
          fields: ['role_id'],
          type: 'FOREIGN KEY',
          name: 'FK_users_role_id',
          references: {
            table: 'roles',
            field: 'id',
          },
          onDelete: 'no action',
          onUpdate: 'cascade',
        },
        { transaction },
      );
      await queryInterface.addConstraint(
        'reviews',
        {
          fields: ['user_id'],
          type: 'FOREIGN KEY',
          name: 'FK_reviews_user_id',
          references: {
            table: 'users',
            field: 'id',
          },
          onDelete: 'no action',
          onUpdate: 'cascade',
        },
        { transaction },
      );
      await queryInterface.addConstraint(
        'reviews',
        {
          fields: ['product_id'],
          type: 'FOREIGN KEY',
          name: 'FK_reviews_product_id',
          references: {
            table: 'products',
            field: 'id',
          },
          onDelete: 'no action',
          onUpdate: 'cascade',
        },
        { transaction },
      );
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.removeConstraint('users', 'FK_users_role_id', {
        transaction,
      });
      await queryInterface.removeConstraint('reviews', 'FK_reviews_user_id', {
        transaction,
      });
      await queryInterface.removeConstraint('reviews', 'FK_reviews_product_id', {
        transaction,
      });
    });
  },
};
