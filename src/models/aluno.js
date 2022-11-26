'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Aluno extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Aluno.init({
    cpf: DataTypes.STRING,
    altura: DataTypes.INTEGER,
    peso: DataTypes.DOUBLE,
    imc: DataTypes.DOUBLE,
    usuario_email_fk: DataTypes.STRING,
    feedback_id: DataTypes.INTEGER,
    feedback_id_fk: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Aluno',
  });
  return Aluno;
};