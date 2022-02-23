const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Employer extends Model { }

Employer.init(
    {
        code: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
            unique: true,
        },
        name: {
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
        pay_cycle_type: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                //  B = BiWeekly (26 pay periods)
                // SM = Semi-Monthly (24 pay periods)
                //  W = Weekly (52 pay periods)
                //  M = Monthly (12 pay periods)
                //  A = Annually (1 pay period)
                //  X = Various
                isIn: [['B', 'SM', 'W', 'M', 'A', 'X']],
              },
        },
        pay_cycle_num: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                max: 52,
                isNumeric: true,
                len:[2],
              },
        },
        num_of_billable_employees: {
            type: DataTypes.INTEGER,
            validate: {
                isNumeric: true,
              },
        },
        per_person_fee: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: false,
            validate: {
                isDecimal: true,
            }
        },
        minimum_fee: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: false,
            validate: {
                isDecimal: true,
            }
        },
        setup_fee: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: false,
            validate: {
                isDecimal: true,
            }
        },
        renewal_month: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                max: 12,
                isNumeric: true,
                len:[2],
              },
        },
        renewal_fee: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: false,
            validate: {
                isDecimal: true,
            }
        },
        agent_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'employer',
    }
);

module.exports = Employer;