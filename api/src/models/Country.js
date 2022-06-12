const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    id: {
      type: DataTypes.STRING(3),//cca3
      allowNull: false,
      primaryKey: true
    },
    nameOfficial: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nameCommon: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flag: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    currencyName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    currencySymbol: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    continent: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    region: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subRegion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    languages: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    area: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    population: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    coatOfArms: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdInDb: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    //Duda
    borders: {
      type: DataTypes.STRING,
    },
    maps: {
      type: DataTypes.STRING,
    },
    timeZones: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
    {
      timestamps: false
    }
  );
};
