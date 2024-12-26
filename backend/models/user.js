const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  hobby: String,
  age: Number,
},{timestamps:true});
const User = mongoose.model("User", userSchema);
module.exports = User;
