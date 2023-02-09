const mongoose = require('mongoose')

const toDoSchema = new mongoose.Schema({
    title: {
      type: String,
      require: true,
      trim: true
    },
    tasks: [
      {
        title: String,
        isCompleted: {
          type: Boolean,
          default: false,
        },
        createdAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  })

module.exports = mongoose.model("todo", toDoSchema);