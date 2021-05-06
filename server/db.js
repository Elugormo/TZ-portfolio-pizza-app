const Sequelize = require("sequelize");

const sequelize = new Sequelize("postgres", "postgres", "docker", {
  host: "localhost",
  dialect: "postgres",
  port: 5400,
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully");
  } catch (err) {
    console.error("Unable to connect to the database", err);
  }
})();

module.exports = sequelize;
