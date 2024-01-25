const {Sequelize, DataType, DataTypes} = require ("sequelize");
const sequelize = require ("../config/database");

const User = sequelize.define(
    "User",
    {
        idUser:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        userName:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        nama: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        role:{
            type: DataTypes.ENUM,
            values: [Admin, Karyawan],
            allowNull: false,
        },
    },
    {
        tableName: "users",
        timestamps: true,
    }
);
module.exports = User;
