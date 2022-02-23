// IMPORTS
const Agent = require('./agent');
const Employer = require('./employer');
const Employee = require('./employee');

// ASSOCATIONS
Agent.hasMany(Employer, {
  foreignKey: 'agent_id',
  onDelete: 'CASCADE'
});

Employer.belongsTo(Agent, {
  foreignKey: 'agent_id',
  onDelete: 'CASCADE'
})

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
    Agent,
    Employer,
    Employee
  };