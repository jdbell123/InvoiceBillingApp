const { Employer } = require("../models");

// Defining methods for the employerController
module.exports = {
  findAll: async function (req, res) {
    try {
      const employerData = await Employer.findAll({
      });
      res.status(200).json(employerData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  findById: async function (req, res) {
    try {
      const employerData = await Employer.findOne({
        where: { code: req.params.id },
      });
      res.status(200).json(employerData)
    } catch (err) {
      console.log(err);
      res.status(422).json(err);
    }
  },
  create: async function (req, res) {
    try {
      // Create the Employer
      const newEmployer = await Employer.create({
        code: req.body.code,
        name: req.body.name,
        address_line1: req.body.address_line1,
        address_line2: req.body.address_line2,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip,
        pay_cycle_type: req.body.pay_cycle_type,
        pay_cycle_num: req.body.pay_cycle_num,
        num_of_billable_employees: req.body.num_of_billable_employees,
        per_person_fee: req.body.per_person_fee,
        minimum_fee: req.body.minimum_fee,
        setup_fee: req.body.setup_fee,
        renewal_month: req.body.renewal_month,
        renewal_fee: req.body.renewal_fee
      })
      res.status(200).json({ newEmployer });
    } catch (err) {
      console.log(err);
      res.status(422).json(err);
    }
  },
  update: async function (req, res) {
    try {
      const employerData = await Employer.update(req.body, {
        where: {
          code: req.params.id
        }
      });
      res.status(200).json(employerData);
    } catch (err) {
      console.log(err);
      res.status(422).json(err);
    }
  },
  remove: async function (req, res) {
    try {
      const employerData = await Employer.destroy({
        where: {
          code: req.params.id
        }
      });
      // If no data found with that ID then return message
      if (!employerData) {
        res.status(404).json({ message: `Delete not possible. No Employer with id ${req.params.id} found in the database!` });
        return;
      }
      res.status(200).json(employerData);
    } catch (err) {
      console.log(err);
      res.status(422).json(err);
    }
  }
};