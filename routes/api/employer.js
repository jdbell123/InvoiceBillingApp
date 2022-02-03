const router = require("express").Router();
const employerController = require("../../controllers/employerController");

// Matches with "/api/employer"
router.route("/")
  .get(employerController.findAll)
  .post(employerController.create);

// Matches with "/api/employer/:id"
router
  .route("/:id")
  .get(employerController.findById)
  .put(employerController.update)
  .delete(employerController.remove);

module.exports = router;