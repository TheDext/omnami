const express = require("express");
const Comment = require("../models/Comment");
const User = require("../models/User");
const router = express.Router({ mergeParams: true });
const auth = require("../middleware/auth.middleware");

router.post("/", async function (req, res) {
  try {
    const { comment, productId, userId, createdAt, _id } = await Comment.create(
      req.body
    );
    const { name: userName } = await User.findOne({ _id: userId });
    res.send({
      createdAt: Date.parse(createdAt),
      comment,
      productId,
      userId,
      _id,
      userName,
    });
  } catch (error) {
    res.status(500).json({
      message: "На сервере произошла ошибка. Попробуйте позже",
    });
  }
});

router.get("/:productId", async function (req, res) {
  try {
    const data = await Comment.find(req.params);
    const dataWithUserName = Promise.all(
      data.map(async (obj) => {
        try {
          const { name } = await User.findOne({ _id: obj.userId });
          return {
            ...obj,
            userName: name,
          };
        } catch (error) {
          res.status(500).json({
            message: "На сервере произошла ошибка. Попробуйте позже",
          });
        }
      })
    );
    dataWithUserName.then((data) => {
      res.send(
        data.map(({ _doc, userName }) => ({
          ..._doc,
          userName,
          createdAt: Date.parse(_doc.createdAt),
        }))
      );
    });
  } catch (error) {
    res.status(500).json({
      message: "На сервере произошла ошибка. Попробуйте позже",
    });
  }
});

router.delete("/:commentId", auth, async function (req, res) {
  try {
    const { commentId } = req.params;
    const removedComment = await Comment.findById(commentId);

    if (removedComment.userId.toString() === req.user._id) {
      await removedComment.remove();
      return res.send(null);
    } else {
      res.status(401).json({ message: "Unauthorized" });
    }
  } catch (error) {}
});

module.exports = router;
