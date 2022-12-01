'use strict';

module.exports = (sequelize, DataTypes) => {
  sequelize.define('Usuarios', {
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
  Usuarios.associate = function (models) {
    Usuarios.hasMany(models.Aluno, { foreignKey: 'usuario_email_fk' });
    Usuarios.hasMany(models.Personal, { foreignKey: 'usuario_email_fk' });
  };

  Usuarios.init({
    email: DataTypes.STRING,
    nome: DataTypes.STRING,
    senha: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Usuarios',
  });

  return Usuarios;
};
