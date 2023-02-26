const express = require("express");
const Order = require("../models/Order");
const router = express.Router({ mergeParams: true });

router.post("/", async function (req, res) {
  try {
    const { createdAt, cart } = await Order.create(req.body);
    res.send({ createdAt: Date.parse(createdAt), cart });
  } catch (error) {
    res.status(500).json({
      message: "На сервере произошла ошибка. Попробуйте позже",
    });
  }
});

router.get("/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const list = await Order.find({ userId });
    const listForClient = list.map(({ createdAt, cart }) => ({
      createdAt,
      cart,
    }));
    res.send(listForClient);
  } catch (error) {
    res.status(500).json({
      message: "На сервере произошла ошибка. Попробуйте позже",
    });
  }
});

module.exports = router;
