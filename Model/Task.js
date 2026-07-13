const mongoose = require('mongoose')

const TaskSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, { timestamps: true })

const TaskModel = mongoose.model('Task', TaskSchema)
module.exports = TaskModel