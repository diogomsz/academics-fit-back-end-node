'use strict';

module.exports = (sequelize, DataTypes) => {
  sequelize.define('Personais', {
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
      primaryKey: true,
      allowNull: false,
      type: DataTypes.STRING
    },
    especializacao: {
      allowNull: false,
      type: DataTypes.STRING
    },
    pcd: {
      allowNull: false,
      type: DataTypes.STRING
    },
    personal_email: {
      allowNull: false,
      type: DataTypes.STRING
    },
    usuario_email_fk: {
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
  
  Personais.associate = function (models) {
    Personais.belongsTo(models.Usuario, { foreignKey: 'usuario_email_fk' });
    Personais.hasMany(models.Aula, { foreignKey: 'personal_cpf_fk' });
    Personais.hasMany(models.Feedback, { foreignKey: 'personal_cpf_fk' });
  };

  Personais.init({
    cpf: DataTypes.STRING,
    especializacao: DataTypes.STRING,
    pcd: DataTypes.STRING,
    personal_email: DataTypes.STRING,
    usuario_email_fk: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Personais',
  });

  return Personais;
};
