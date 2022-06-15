const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('season', {
    name: {
      type: DataTypes.STRING,
      //values: ['Invierno', 'Otoño', 'Primavera', 'Verano'],
      allowNull: false,
    },
  },
    {
      timestamps: false
    }
  );
};
// ENUM('Invierno', 'Otoño', 'Primavera', 'Verano')
