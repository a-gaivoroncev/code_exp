'use strict';

const { STRING, UUIDV4, UUID, TEXT, INTEGER, SMALLINT, ENUM, JSON, FLOAT } = require('sequelize').DataTypes;

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const id = {
      primaryKey: true,
      type: UUID,
      defaultValue: UUIDV4,
    };

    const timestamp = {
      updatedAt: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false,
      },
      createdAt: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    };
    await queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.createTable(
        'users',
        {
          id,
          username: {
            type: STRING(40),
            allowNull: false,
          },
          avatar_url: {
            type: TEXT,
          },
          email: {
            type: STRING(100),
            allowNull: false,
          },
          role_id: {
            type: SMALLINT,
          },
          ...timestamp,
        },
        { transaction },
      );
      await queryInterface.createTable(
        'roles',
        {
          id: {
            type: SMALLINT,
            primaryKey: true,
          },
          name: {
            type: ENUM('ADMIN', 'SUPERADMIN', 'USER'),
            allowNull: false,
          },
          ...timestamp,
        },
        {
          transaction,
        },
      );

      await queryInterface.createTable(
        'products',
        {
          id,
          image_url: {
            type: TEXT,
          },
          price: {
            type: FLOAT,
            defaultValue: 0,
          },
          description: {
            type: TEXT,
          },
          properties: {
            type: JSON,
          },
          ...timestamp,
        },
        { transaction },
      );

      await queryInterface.createTable(
        'reviews',
        {
          id,
          title: {
            type: STRING,
            defaultValue: 'Без названия',
          },
          body: {
            type: TEXT,
          },
          rating: {
            type: SMALLINT,
            validate: {
              min: 0,
              max: 5,
            },
          },
          user_id: {
            type: UUID,
          },
          product_id: {
            type: UUID,
          },
          ...timestamp,
        },
        { transaction },
      );
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.dropTable('users', { transaction });
      await queryInterface.dropTable('roles', { transaction });
      await queryInterface.dropTable('products', { transaction });
      await queryInterface.dropTable('reviews', { transaction });
    });
  },
};
