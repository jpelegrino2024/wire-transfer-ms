import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';

dotenv.config();
const { DB_DATABASE, DB_USER, DB_PASS } = process.env;
const sequelize = new Sequelize(DB_DATABASE, DB_USER, DB_PASS, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: 'mysql',
  define: {
    timestamps: false
  }
});

export default sequelize;
