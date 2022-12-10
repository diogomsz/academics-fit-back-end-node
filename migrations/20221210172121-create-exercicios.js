'use strict';
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Exercicios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING
      },
      link: {
        type: Sequelize.STRING
      },
      grupo_muscular: {
        type: Sequelize.STRING
      },
      ficha_id_fk: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Fichas',
          key: 'id',
        },
      },
      personal_cpf_fk: {
        type: Sequelize.STRING,
        references: {
          model: 'Personais',
          key: 'cpf',
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
    await queryInterface.dropTable('Exercicios');
  }
};
