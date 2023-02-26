const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category"
    },
    name: String,
    price: Number,
    composition: String,
    weight: String,
  },
  {
    timestamps: true,
  }
);

module.exports = model("Product", schema);
