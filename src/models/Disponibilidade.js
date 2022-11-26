'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Disponibilidade extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Disponibilidade.init({
    cpf: DataTypes.STRING,
    dia_semana: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Disponibilidade',
  });
  return Disponibilidade;
};