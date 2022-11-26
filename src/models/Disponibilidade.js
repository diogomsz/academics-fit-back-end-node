'use strict';

module.exports = (sequelize, DataTypes) => {
  sequelize.define('Disponibilidade', {});
  Disponibilidade.associate = function (models) {};

  Disponibilidade.init({
    cpf: DataTypes.STRING,
    dia_semana: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Disponibilidade',
    paranoid: true,
  });

  return Disponibilidade;
};
