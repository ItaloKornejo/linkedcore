const  {Sequelize} = require ('sequelize');
const dotenv = require ('dotenv');

dotenv.config();

const db = new Sequelize({
    dialect: 'postgres',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    dialectOptions: {
        ssl: true,
    },
});
module.exports = db;