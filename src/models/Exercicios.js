'use strict';

module.exports = (sequelize, DataTypes) => {
  sequelize.define('Exercicios', {
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
    nome: {
      allowNull: false,
      type: DataTypes.STRING
    },
    link: {
      allowNull: false,
      type: DataTypes.STRING
    },
    grupo_muscular: {
      allowNull: false,
      type: DataTypes.STRING
    },
    ficha_fk: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    personal_cpf_fk: {
      allowNull: false,
      type: DataTypes.STRING
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
  Exercicios.associate = function (models) {
    Exercicios.belongsTo(models.Fichas, { foreignKey: 'ficha_fk' });
    Exercicios.belongsTo(models.Personais, { foreignKey: 'personal_cpf_fk' });
  };

  Exercicios.init({
    nome: DataTypes.STRING,
    link: DataTypes.STRING,
    grupo_muscular: DataTypes.STRING,
    ficha_fk: DataTypes.INTEGER,
    personal_cpf_fk: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Exercicios',
  });
  
  return Exercicios;
};
