const router = require("express").Router();
const agentController = require("../../controllers/agentController");

// Matches with "/api/agent"
router.route("/")
  .get(agentController.findAll)
  .post(agentController.create);

// Matches with "/api/agent/:id"
router
  .route("/:id")
  .get(agentController.findById)
  .put(agentController.update)
  .delete(agentController.remove);

module.exports = router;