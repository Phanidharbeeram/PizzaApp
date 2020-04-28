const mongoose = require("mongoose");
const schema = mongoose.Schema;

const newfile = new schema({
  
  price: String,
  inCart: Boolean,
  count: Number,

  title: String,
  url: String,
});
module.exports = mongoose.model("Files", newfile, "Files");
