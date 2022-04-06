import { Sequelize } from "sequelize";

const db = new Sequelize('hcv_data', 'admin', 'password', {
    host: "localhost",
    dialect: "mysql"
});

export default db;