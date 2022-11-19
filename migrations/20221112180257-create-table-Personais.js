'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Personais", {
      uid: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false
      },

      cpf: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },

      nome: {
        allowNull: false,
        type: Sequelize.STRING
      },

      especializacao: {
        allowNull: false,
        type: Sequelize.STRING
      },

      pcd: {
        allowNull: false,
        type: Sequelize.STRING
      },

      cadastradosCpf: {
        allowNull: false,
        type: Sequelize.STRING,
        references: { model: "Cadastrados", key: "cpf" },
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Personais");
  },
};  

