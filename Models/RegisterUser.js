const mongoose = require("mongoose");
const schema = mongoose.Schema;

const newUser = new schema({
  firstname: String,
  lastname: String,
  email: String,
  password: String,
});
module.exports = mongoose.model("RegisterUser", newUser, "RegisterUser");
