import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';

dotenv.config();
const { DB_DATABASE, DB_USER, DB_PASS } = process.env;

const cred = {
  database: process.env.CUSTOMER_DB_K8 || DB_DATABASE,
  user: process.env.CUSTOMER_USER_K8 || DB_USER,
  password: process.env.CUSTOMER_PASS_K8 || DB_PASS,
  host: process.env.CUSTOMER_HOST_K8 || process.env.DB_HOST
};

const sequelize = new Sequelize(cred.database, cred.user, cred.password, {
  host: cred.host,
  dialect: 'mysql',
  define: {
    timestamps: false
  }
});

export default sequelize;
