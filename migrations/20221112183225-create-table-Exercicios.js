'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Exercicios", {
      uid: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false
      },

      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },

      nome: {
        allowNull: false,
        type: Sequelize.STRING
      },

      link: {
        allowNull: false,
        type: Sequelize.INTEGER
      },

      grupoMuscular: {
        allowNull: false,
        type: Sequelize.STRING
      },

      fichaCpf: {
        allowNull: false,
        type: Sequelize.STRING,
        references: { model: "Ficha", key: "cpf" },
      },

      personaisCpf: {
        allowNull: false,
        type: Sequelize.STRING,
        references: { model: "Personais", key: "cpf" },
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Exercicios");
  }
}