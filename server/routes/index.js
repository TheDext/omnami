const express = require("express");
const router = express.Router({ mergeParams: true });

// http://localhost:8080/api/product?category=pizza
router.use("/product", require("./product.routes"));

router.use("/user", require("./user.routes"));
router.use("/auth", require("./auth.routes"));
router.use("/order", require("./order.routes"));

module.exports = router;
