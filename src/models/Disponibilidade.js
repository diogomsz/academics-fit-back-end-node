module.exports = (sequelize, DataTypes) => {
  const Disponibilidade = sequelize.define('Disponibilidade', {
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

    diaSemana: {
      allowNull: false,
      type: DataTypes.STRING
    },

    horario: {
      allowNull: false,
      type: DataTypes.DATE
    },

    personaisCpf: {
      allowNull: false,
      type: DataTypes.STRING
    }
  });

  sequelize.associate = function (models) {
    Disponibilidade.belongsTo(models.Personais, { foreignKey: "personaisCpf" });
  };

  return Disponibilidade;
};

