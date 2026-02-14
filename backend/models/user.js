const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullname: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  gender: { type: String, required: true },
  dob: { type: Date, required: true },
  address: { type: String, required: true },
  country: { type: String, required: true },
  password: { type: String, required: true },
  profilePhoto: { type: String },
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
