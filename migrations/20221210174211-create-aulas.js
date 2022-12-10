'use strict';
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Aulas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      data: {
        type: Sequelize.DATE
      },
      aluno_cpf_fk: {
        type: Sequelize.STRING,
        references: {
          model: 'Alunos',
          key: 'cpf',
        },
      },
      personal_cpf_fk: {
        type: Sequelize.STRING,
        references: {
          model: 'Personais',
          key: 'cpf',
        },
      },
      ficha_id_fk: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Fichas',
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
    await queryInterface.dropTable('Aulas');
  }
};
