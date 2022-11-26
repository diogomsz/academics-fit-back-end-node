'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Exercicio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Exercicio.init({
    nome: DataTypes.STRING,
    link: DataTypes.STRING,
    grupo_muscular: DataTypes.STRING,
    ficha_fk: DataTypes.INTEGER,
    personal_cpf_fk: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Exercicio',
  });
  return Exercicio;
};