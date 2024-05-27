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

export const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection stablished');
  } catch (err) {
    console.error(err);
  }
};

export default sequelize;
