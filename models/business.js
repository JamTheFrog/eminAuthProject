const mongoose = require("mongoose");
const { Schema } = mongoose;

const businessSchema = new Schema({
  name: { type: String, required: true },
  parts: [String],
  ownerId: { type: String, required: true }
});

mongoose.model("business", businessSchema);
