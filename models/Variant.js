import { DataTypes } from 'sequelize';
import dbConnection from '../config/db.js';

const ProductVariantModel = dbConnection.define('variants', {
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
  product_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('active', 'inactive'),
    defaultValue: 'active',
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  images: {
    type: DataTypes.JSON,
    allowNull: false,
  },
  compare_price_at: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  minimum_order_quantity: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  warehouse_arr: {
    type: DataTypes.JSON,
    allowNull: false,
  },
  price_details: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  sku: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  color_id: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  size_id: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  material_id: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  created_by: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  packaging_type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  is_vat_inclusive: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  discount_type: {
    type: DataTypes.ENUM('fixed', 'percentage'),
  },
  discount: {
    type: DataTypes.BIGINT,
  },
  discountedPrice: {
    type: DataTypes.FLOAT,
  },
}, { timestamps: false, tableName: 'variants' });

export default ProductVariantModel;