const mongoose = require("mongoose");
const { Schema } = mongoose;

const ObrasGuardadas = new Schema(
  {
    title: { type: String, required: true },
    imageName: { type: String, required: true },
    author: { type: String, required: true },
    description: { type: String, required: true },
    url: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("ObrasGuardadas", ObrasGuardadas);
