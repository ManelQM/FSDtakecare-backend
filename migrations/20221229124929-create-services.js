'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Services', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      publication_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Publications',
          key: 'id'
        }
      },
      title: {
        type: Sequelize.STRING
      },
      nickname: {
        type: Sequelize.STRING
      },
      offeredto: {
        type: Sequelize.STRING
      },
      text: {
        type: Sequelize.STRING
      },
      salary: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Services');
  }
};