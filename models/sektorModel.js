const {DataTypes} = require ("sequelize");
const sequelize = require ("../config/database");

const Sektor = sequelize.define(
    "Sektor",
    {
        idSektor: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        namaSektor:{
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        tableName: "sektor",
        timestamps: true,
    }
);
module.exports = Sektor;