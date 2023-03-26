const express = require("express");
const router = express.Router({ mergeParams: true });

router.use("/product", require("./product.routes"));
router.use("/user", require("./user.routes"));
router.use("/auth", require("./auth.routes"));
router.use("/order", require("./order.routes"));
router.use("/comment", require("./comment.routes"));

module.exports = router;
