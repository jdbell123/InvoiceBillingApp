const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Agent extends Model { }

Agent.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        agency_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        contact_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        address_line1: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        address_line2: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        zip: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isNumeric: true,
                len: [5],
            },
        },
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'agent',
    }
);

module.exports = Agent;