const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Employee extends Model { }

Employee.init(
    {
        employer_code: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
        },
        employee_id: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        eligibility_date: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        termination_date: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                // 1 = New
                // 2 = Active
                // 3 = Temporarily Inactive
                // 4 = Permanently Inactive
                // 5 = Terminated
                isIn: [['1', '2', '3', '4', '5']],
              },
        },
        division: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'employee',
    }
);

module.exports = Employee;