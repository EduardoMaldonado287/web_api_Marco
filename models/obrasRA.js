const mongoose = require("mongoose");
const { Schema } = mongoose;

const ObrasRA_Model = new Schema(
  {
    title: { type: String, required: true },
    imageName: { type: String, required: true },
    model3dName: {type: String, required: true},
    audioDescriptionName: {type: String, required: true},
    creationYear: { type: String, required: true },
    author: { type: String, required: true },
    description: { type: String, required: true },
    type: { type: String, required: true },
    isInExhibition: {type: Boolean, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("ObrasRA_Model", ObrasRA_Model);
