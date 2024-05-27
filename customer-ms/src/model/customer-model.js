import sequelize from '../database.js';
import { DataTypes, Model } from 'sequelize';

class Customer extends Model {}

Customer.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    firstName: {
      type: DataTypes.STRING
    },
    lastName: {
      type: DataTypes.STRING
    },
    emailAddress: {
      type: DataTypes.STRING
    }
  },
  {
    sequelize,
    modelName: 'customer',
    underscored: true
  }
);

export default Customer;
