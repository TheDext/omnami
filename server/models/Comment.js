const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    comment: { type: String, required: true },
    productId: { type: String, required: true },
    userId: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Comment", schema);
