'use strict';

module.exports = (sequelize, DataTypes) => {
  sequelize.define('Feedback', {
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
    avaliacao_sistema: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    comentario: {
      allowNull: false,
      type: DataTypes.STRING
    },
    recomendacao_sistema: {
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
  Feedback.associate = function (models) {
    Feedback.hasMany(models.Aluno, { foreignKey: 'feedback_id_fk' });
  };

  Feedback.init({
    avaliacao_sistema: DataTypes.INTEGER,
    comentario: DataTypes.STRING,
    recomendacao_sistema: DataTypes.INTEGER,
    personal_cpf_fk: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Feedback',
    paranoid: true,
  });
  
  return Feedback;
};
