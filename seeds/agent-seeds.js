/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

const { Agent } = require('../models')

/* -------------------------------------------------------------------------- */
/*                            Define Data to Inject                           */
/* -------------------------------------------------------------------------- */
// Define array of data to seed
const agentData = [
    {
        agency_name: "House Account",
        contact_name: "John Bell",
        address_line1: "Agent Address Line 1",
        address_line2: "Agent Address Line 2",
        city: "Agent City",
        state: "Agent State",
        zip: 12345,
    },
    {
        agency_name: "The Bell Agency",
        contact_name: "Adam Bell",
        address_line1: "Agent2 Address Line 1",
        address_line2: "Agent2 Address Line 2",
        city: "Agent2 City",
        state: "Agent2 State",
        zip: 54321,
    },
];

// create function that bulk creates data using the array I created
const seedAgent = () => Agent.bulkCreate(agentData);

/* -------------------------------------------------------------------------- */
/*                              Export the Module                             */
/* -------------------------------------------------------------------------- */

module.exports = seedAgent;