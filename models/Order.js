import { DataTypes } from 'sequelize';
import dbConnection from '../config/db.js';
import UserModel from './User.js';
// import UserAddressModel from './UserAddressModel.js';
// import UserEducationInfoModel from './UserEducationInfoModel.js';  // If needed for future association

const OrderModel = dbConnection.define(
  'orders',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    uuid: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pick_up_latitude: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    order_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    payment_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    warehouse_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    outlet_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    warehouse_po_box: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    warehouse_address: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    outlet_address: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    pick_up_longitude: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    drop_latitude: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    drop_longitude: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    vendor_details: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    po_box: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    product_arr: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    retailer_product_arr: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    additional_commission_rate_for_retailer: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    coupon_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    sub_total: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    retailer_sub_total: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    delivery_charges: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    payment_method: {
      type: DataTypes.ENUM(
        'Cash on Delivery',
        'Paypal',
        'Debit Card',
        'Credit Card',
        'Razorpay'
      ),
      allowNull: false,
      defaultValue: 'Cash on Delivery',
    },
    payment_status: {
      type: DataTypes.ENUM('complete', 'failed', 'pending'),
      allowNull: false,
      defaultValue: 'pending',
    },
    payment_mode: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    status: {
      type: DataTypes.ENUM(
        'new',
        'dispatched',
        'orderaccepted',
        'processing',
        'outfordelivery',
        'delivered',
        'cancelled',
        'return-request',
        'return-failed',
        'return-success',
        'acceptedbyFE'
      ),
      allowNull: false,
      defaultValue: 'new',
    },
    card_details: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    country_code: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'IN',
    },
    card_data: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    txn_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    order_date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    order_accepted_by_vendor: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    delivery_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    ref_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    shipping_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    out_for_delivery_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    delivery_instructions: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    apiHit: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    lastHitTime: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
    },
    pickupToDropDistance: {
      type: DataTypes.STRING,
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  { timestamps: false, tableName: 'orders' }
);

OrderModel.belongsTo(UserModel, { foreignKey: 'user_id', targetKey: 'uuid' });
UserModel.hasMany(OrderModel, { foreignKey: 'user_id', sourceKey: 'uuid' });

export default OrderModel;