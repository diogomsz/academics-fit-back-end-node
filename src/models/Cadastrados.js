module.exports = (sequelize, DataTypes) => {
  const Cadastrados = sequelize.define('Cadastrados', {
    uid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false
    },

    cpf: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING
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
    }
  });

  sequelize.associate = function (models) {
    Cadastrados.hasMany(models.Alunos, { foreignKey: "cadastradosCpf" });
    Cadastrados.hasMany(models.Personais, { foreignKey: "cadastradosCpf" });
  };

  return Cadastrados;
};
