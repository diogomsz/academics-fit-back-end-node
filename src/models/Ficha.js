'use strict';

module.exports = (sequelize, DataTypes) => {
  sequelize.define('Ficha', {
    uid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false
    },
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    nome_exercicio: {
      allowNull: false,
      type: DataTypes.STRING
    },
    series: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    repeticoes: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  });
  
  Ficha.associate = function (models) {
    Ficha.hasMany(models.Aula, { foreignKey: 'ficha_fk' });
    Ficha.hasMany(models.Exercicio, { foreignKey: 'ficha_fk' });
    Ficha.hasMany(models.Personal, { foreignKey: 'personal_cpf_fk' });
  }

  Ficha.init({
    nome_exercicio: DataTypes.STRING,
    series: DataTypes.NUMBER,
    repeticoes: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'Ficha',
  });

  return Ficha;
};
