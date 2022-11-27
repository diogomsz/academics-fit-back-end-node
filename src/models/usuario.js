'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  sequelize.define('Usuario', {
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
    email: {
      allowNull: false,
      type: DataTypes.STRING
    },
    nome: {
      allowNull: false,
      type: DataTypes.STRING
    },
    senha: {
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
  Usuario.associate = function (models) {
    Usuario.hasMany(models.Aluno, { foreignKey: 'usuario_email_fk' });
    Usuario.hasMany(models.Personal, { foreignKey: 'usuario_email_fk' });
  };

  Usuario.init({
    email: DataTypes.STRING,
    nome: DataTypes.STRING,
    senha: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Usuario',
  });

  return Usuario;
};
