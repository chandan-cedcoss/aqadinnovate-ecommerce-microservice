import { Sequelize, DataTypes } from 'sequelize';
import dbConnection from '../config/db.js';

const User = dbConnection.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    uuid: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        },
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [8, 16],
            is: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,16}$/,
        },
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    role: {
        type: DataTypes.STRING,
        defaultValue: 'user',
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.fn('NOW'),
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.fn('NOW'),
    },
}, {
    timestamps: true,
    tableName: 'users',
});

export default User;
