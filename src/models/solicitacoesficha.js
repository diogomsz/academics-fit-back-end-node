'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class SolicitacoesFicha extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      SolicitacoesFicha.belongsTo(models.Alunos, {
        foreignKey: 'aluno_cpf_fk',
      });
    }
  }

  SolicitacoesFicha.init({
    objetivo: DataTypes.STRING,
    altura: DataTypes.FLOAT,
    peso: DataTypes.FLOAT,
    descricao_objetivo: DataTypes.STRING,
    aluno_cpf_fk: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'SolicitacoesFicha',
  });

  return SolicitacoesFicha;
};
