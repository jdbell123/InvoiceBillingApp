/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

// Import all the seed data functions created in this directory
const seedEmployer = require('./employer-seeds');

// Import the database connection instance from connection / config
const sequelize = require('../config/connection');

/* -------------------------------------------------------------------------- */
/*                    Define Function for Database Seeding                    */
/* -------------------------------------------------------------------------- */
/*
    Every time we run this seedAll function it will overwrite our existing 
    tables and refresh it with our latest models, then the data in our seed files
*/

const seedAll = async () => {

  await sequelize.sync({ force: true }); // Force true adds a drop table if exists- so it will override any existing data we have in there. 

  console.log('\n----- DATABASE SYNCED -----\n');

  await seedEmployer();
  console.log('\n----- EMPLOYER SEEDED -----\n');

  process.exit(0);

};

/* -------------------------------------------------------------------------- */
/*                          Execute Seed All Function                         */
/* -------------------------------------------------------------------------- */

seedAll();