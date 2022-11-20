module.exports = (sequelize, DataTypes) => {
  const Alunos = sequelize.define('Alunos', {
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

    nome: {
      allowNull: false,
      type: DataTypes.STRING
    },

    altura: {
      allowNull: false,
      type: DataTypes.INTEGER
    },

    peso: {
      allowNull: false,
      type: DataTypes.INTEGER
    },

    imc: {
      allowNull: false,
      type: DataTypes.INTEGER
    },

    cadastradosCpf: {
      allowNull: false,
      type: DataTypes.STRING
    },

    tableName: "Alunos"
  });

  Alunos.associate = function (models) {
    Alunos.belongsTo(models.Cadastrados, { foreignKey: "cadastradosCpf" });
  };

  return Alunos;
};
