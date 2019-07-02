const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let Vasamba = new Schema({
  categories: {
    type: Object
  }
});
module.exports = mongoose.model("Vasamba", Vasamba);
