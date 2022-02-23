/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

const { Employer } = require('../models')

/* -------------------------------------------------------------------------- */
/*                            Define Data to Inject                           */
/* -------------------------------------------------------------------------- */
// Define array of data to seed
const employerData = [
    {
        code: "ABI9000",
        name: "AGCO",
        address_line1: "AGCO Address Line 1",
        address_line2: "AGCO Address Line 2",
        city: "Duluth",
        state: "Georgia",
        zip: 30338,
        pay_cycle_type: "M",
        pay_cycle_num: 12,
        num_of_billable_employees: 10,
        per_person_fee: 4.00,
        minimum_fee: 100.00,
        setup_fee: 0.00,
        renewal_month: 01,
        renewal_fee: 50.00,
        agent_id: 1,
    },
    {
        code: "ABI9001",
        name: "OCGA",
        address_line1: "OCGA Address Line 1",
        address_line2: "OCGA Address Line 2",
        city: "Denver",
        state: "Colorado",
        zip: 12345,
        pay_cycle_type: "M",
        pay_cycle_num: 12,
        num_of_billable_employees: 10,
        per_person_fee: 4.00,
        minimum_fee: 100.00,
        setup_fee: 0.00,
        renewal_month: 02,
        renewal_fee: 50.00,
        agent_id: 1,
    },
    {
        code: "ABI9002",
        name: "NCOR",
        address_line1: "NCOR Address Line 1",
        address_line2: "NCOR Address Line 2",
        city: "Houston",
        state: "Texas",
        zip: 43123,
        pay_cycle_type: "M",
        pay_cycle_num: 12,
        num_of_billable_employees: 10,
        per_person_fee: 4.00,
        minimum_fee: 100.00,
        setup_fee: 0.00,
        renewal_month: 03,
        renewal_fee: 50.00,
        agent_id: 1,
    },
    {
        code: "ABI9003",
        name: "ALMO",
        address_line1: "ALMO Address Line 1",
        address_line2: "ALMO Address Line 2",
        city: "Atlanta",
        state: "Geogria",
        zip: 31116,
        pay_cycle_type: "M",
        pay_cycle_num: 12,
        num_of_billable_employees: 10,
        per_person_fee: 4.00,
        minimum_fee: 100.00,
        setup_fee: 0.00,
        renewal_month: 04,
        renewal_fee: 50.00,
        agent_id: 2,
    },
    {
        code: "ABI9004",
        name: "TRLO",
        address_line1: "TRLO Address Line 1",
        address_line2: "TRLO Address Line 2",
        city: "Salt Lake City",
        state: "Utal",
        zip: 51523,
        pay_cycle_type: "M",
        pay_cycle_num: 12,
        num_of_billable_employees: 10,
        per_person_fee: 4.00,
        minimum_fee: 100.00,
        setup_fee: 0.00,
        renewal_month: 05,
        renewal_fee: 50.00,
        agent_id: 2,
    },
];

// create function that bulk creates data using the array I created
const seedEmployer = () => Employer.bulkCreate(employerData);

/* -------------------------------------------------------------------------- */
/*                              Export the Module                             */
/* -------------------------------------------------------------------------- */

module.exports = seedEmployer;