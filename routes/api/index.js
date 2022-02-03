const router = require("express").Router();

const employerRoutes = require("./employer");

router.use("/employer", employerRoutes);

module.exports = router;