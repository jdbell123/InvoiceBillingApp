const { Agent } = require("../models");

// Defining methods for the agentController
module.exports = {
  findAll: async function (req, res) {
    try {
      const agentData = await Agent.findAll({
      });
      res.status(200).json(agentData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  findById: async function (req, res) {
    try {
      const agentData = await Agent.findOne({
        where: { id: req.params.id },
      });
      res.status(200).json(agentData)
    } catch (err) {
      console.log(err);
      res.status(422).json(err);
    }
  },
  create: async function (req, res) {
    try {
      // Create the Agent
      const newAgent = await Agent.create({
        agency_name: req.body.agency_name,
        contact_name: req.body.contact_name,
        address_line1: req.body.address_line1,
        address_line2: req.body.address_line2,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip,
      })
      res.status(200).json({ newAgent });
    } catch (err) {
      console.log(err);
      res.status(422).json(err);
    }
  },
  update: async function (req, res) {
    try {
      const agentData = await Agent.update(req.body, {
        where: {
          id: req.params.id
        }
      });
      res.status(200).json(agentData);
    } catch (err) {
      console.log(err);
      res.status(422).json(err);
    }
  },
  remove: async function (req, res) {
    try {
      const agentData = await Agent.destroy({
        where: {
          id: req.params.id
        }
      });
      // If no data found with that ID then return message
      if (!agentData) {
        res.status(404).json({ message: `Delete not possible. No Agent with id ${req.params.id} found in the database!` });
        return;
      }
      res.status(200).json(agentData);
    } catch (err) {
      console.log(err);
      res.status(422).json(err);
    }
  }
};