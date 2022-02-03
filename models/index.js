// IMPORTS
const Employer = require('./employer');
const Employee = require('./employee');

// ASSOCATIONS
Employer.hasMany(Employee, {
  foreignKey: 'employer_code',
  sourceKey: 'code',
});

Employee.belongsTo(Employer, {
  foreignKey: 'employer_code',
  targetKey: 'code',
})

// EXPORTS
module.exports = {
    Employer,
    Employee
  };