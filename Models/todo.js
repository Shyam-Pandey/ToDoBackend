const mongoose = require('mongoose')

const toDoSchema = new mongoose.Schema({
    title: {
      type:{type: String},
      require: true,
      trim: true,
      maxlength: 25
    },
    tasks: {
      type: [{
        type: String
      }]},
  })

module.exports = mongoose.model("todo", toDoSchema);