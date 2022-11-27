'use strict';

module.exports = (sequelize, DataTypes) => {
  sequelize.define('Disponibilidade', {
    uid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false
    },
    id: {
      allowNull: false,
      autoIncrement: true,
      type: DataTypes.INTEGER
    },
    cpf: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING
    },
    dia_semana: {
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

  Disponibilidade.associate = function (models) {
    Disponibilidade.belongsTo(models.Aluno, { foreignKey: 'cpf' });
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
