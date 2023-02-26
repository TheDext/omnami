const express = require("express");
const Product = require("../models/Product");
const Categories = require("../models/Category");
const router = express.Router({ mergeParams: true });

router.get("/", async function (req, res) {
  try {
    const categoryQuery = req.query.category;
    const { _id } = await Categories.findOne({ name: categoryQuery });
    const list = await Product.find({ category: _id });
    res.send(list);
  } catch (error) {
    res.status(500).json({
      message: "На сервере произошла ошибка. Попробуйте позже",
    });
  }
});
router.get("/:productId", async function (req, res) {
  try {
    const { productId } = req.params;
    const product = await Product.find({ _id: productId });
    res.send(product);
  } catch (error) {
    res.status(500).json({
      message: "На сервере произошла ошибка. Попробуйте позже",
    });
  }
});

module.exports = router;
