'use strict';
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Alunos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      cpf: {
        primaryKey: true,
        type: Sequelize.STRING
      },
      altura: {
        type: Sequelize.FLOAT
      },
      peso: {
        type: Sequelize.FLOAT
      },
      imc: {
        type: Sequelize.FLOAT
      },
      feedback_id: {
        type: Sequelize.INTEGER
      },
      usuario_email_fk: {
        type: Sequelize.STRING,
        references: {
          model: 'Usuarios',
          key: 'email',
        },
      },
      feedback_id_fk: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Feedbacks',
          key: 'id',
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
    await queryInterface.dropTable('Alunos');
  }
};
