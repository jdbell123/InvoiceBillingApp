const router = require("express").Router();

const agentRoutes = require("./agent");
const employerRoutes = require("./employer");

router.use("/agent", agentRoutes);
router.use("/employer", employerRoutes);

module.exports = router;