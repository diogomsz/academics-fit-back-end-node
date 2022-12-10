'use strict';
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Personais', {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      cpf: {
        primaryKey: true,
        type: Sequelize.STRING
      },
      especializacao: {
        type: Sequelize.STRING
      },
      pcd: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      usuario_email_fk: {
        type: Sequelize.STRING,
        references: {
          model: 'Usuarios',
          key: 'email',
        },
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
    await queryInterface.dropTable('Personais');
  }
};
