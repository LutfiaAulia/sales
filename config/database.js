const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("salesyak", "root", "", {
  port: 3307,
  host: "localhost",
  dialect: "mysql",
});

try {
  sequelize.authenticate();
  console.log("Koneksi berhasil terhubung ke database.");
} catch (error) {
  console.error("Koneksi gagal terhubung ke database:", error);
}

module.exports = sequelize;
