import { DataTypes } from 'sequelize';
import dbConnection from '../config/db.js';
import ProductVariantModel from './Variant.js';

const ProductModel = dbConnection.define('products', {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  uuid: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  brand_id: {
    type: DataTypes.BIGINT,
  },
  category_id: {
    type: DataTypes.BIGINT,
  },
  subcategory_id: {
    type: DataTypes.BIGINT,
  },
  condition: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  summary: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  universal_standard_code: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  status: {
    type: DataTypes.ENUM('active', 'inactive'),
    defaultValue: 'active',
  },
  created_by: {
    type: DataTypes.BIGINT,
  },
  product_images: {
    type: DataTypes.JSON,
    defaultValue: null,
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  updated_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, { timestamps: false, tableName: 'products' });

ProductModel.hasMany(ProductVariantModel, { foreignKey: 'product_id' });
export default ProductModel;