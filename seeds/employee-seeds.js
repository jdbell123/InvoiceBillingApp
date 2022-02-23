/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

const { Employee } = require('../models')

/* -------------------------------------------------------------------------- */
/*                            Define Data to Inject                           */
/* -------------------------------------------------------------------------- */
// Define array of data to seed
const employeeData = [
    {
        employer_code: "ABI9000",
        employee_id: "123456789",
        first_name: "JANE",
        last_name: "DOE",
        eligibility_date: "20210601",
        status: "2",
        division: "North",
    },
    {
        employer_code: "ABI9001",
        employee_id: "123456789",
        first_name: "JANE",
        last_name: "DOE",
        eligibility_date: "20200101",
        termination_date: "20210505",
        status: "5",
        division: "East",
    },
    {
        employer_code: "ABI9000",
        employee_id: "987654321",
        first_name: "JOHN",
        last_name: "DOE",
        eligibility_date: "20220101",
        status: "1",
        division: "South",
    },
    {
        employer_code: "ABI9000",
        employee_id: "011223344",
        first_name: "TOM",
        last_name: "DOE",
        eligibility_date: "20190101",
        status: "2",
        division: "West",
    },
];

// create function that bulk creates data using the array I created
const seedEmployee = () => Employee.bulkCreate(employeeData);

/* -------------------------------------------------------------------------- */
/*                              Export the Module                             */
/* -------------------------------------------------------------------------- */

module.exports = seedEmployee;