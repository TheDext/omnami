const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    name: String,
    email: { type: String, require: true, unique: true },
    password: String,
    tel: String,
    street: String,
    house: String,
    entrance: String,
    apartment: String,
    orders: { type: Schema.Types.ObjectId, ref: "Order" },
  },
  {
    timestamps: true,
  }
);

module.exports = model("User", schema);
