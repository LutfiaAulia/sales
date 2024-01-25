const { DataTypes } = require("sequelize")
const sequelize = require ("../config/database")

const Sto = sequelize.define (
    "Sto",
    {
        idSto:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        idSektor:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        namaSto:{
            type: DataTypes.STRING,
            allowNull: false,
        },      
    },
    {
        tableName: "sto",
        timestamps: true,
    }
);
module.exports = Sto;