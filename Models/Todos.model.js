const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
  name: String,
  price: Number,
  userID: String,
});

const TodoModel = mongoose.model("todo", todoSchema);

module.exports = {
  TodoModel,
};
