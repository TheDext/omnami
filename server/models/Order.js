const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    userId: String,
    street: String,
    house: String,
    entrance: String,
    apartment: String,
    floor: String,
    institutionAddress: String,
    date: String,
    time: String,
    comment: String,
    cart: { type: Object },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Order", schema);
