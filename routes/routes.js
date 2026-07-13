const express = require('express')
const router = express.Router()
const TaskModel = require('../Model/Task')

// Controller function to take req from user and provide proper res to the user.
// get all tasks
router.get('/tasks', async (req, res) => {
    try {
        const tasks = await TaskModel.find()
        res.status(200).json(tasks)
    } catch (error) {
        res.status(504).json({ message: "Error fetching tasks", error: error.message })
    }
})

//create a task
router.post('/create', async (req, res) => {
    try {
        const { title, description } = req.body;
        const newTask = new TaskModel({ title, description })
        await newTask.save()
        res.status(201).json(newTask)
    } catch (error) {
        res.status(504).json({ message: "Error Creating task" })
        console.log(error)
    }
})

// get a single task
router.get('/task/:id', async (req, res) => {
    try {
        const task = await TaskModel.findById(req.params.id)
        if (!task) return res.json(404).json({ message: "Task not found!", error: error.message })
        res.status(200).json(task)
    } catch (error) {
        res.status(504).json({ message: "Error fetching task", error: error.message })
    }
})

// edit a task
router.put('/edit/:id', async (req, res) => {
    try {
        const { title, description } = req.body
        const updatedTask = await TaskModel.findByIdAndUpdate(
            req.params.id,
            { title, description },
            { returnDocument: "after" }
        )
        if (!updatedTask) return res.json(404).json({ message: "Task not found!", error: error.message })
        res.status(200).json({
            message: "Task updated successfully",
            task: updatedTask
        });
    } catch (error) {
        console.log(error)
        res.status(504).json({ message: "Error updating task", error: error.message })
    }
})

// delete a task
router.delete('/delete/:id', async (req, res) => {
    try {
        const deleteTask = await TaskModel.findByIdAndDelete(req.params.id)
        if (!deleteTask) return res.status(404).json({ message: "No task found to delete!" })
        res.status(200).json({ message: "Task deleted successfully!" })
    } catch (error) {
        res.status(504).json({ message: "Error deleting task", error: error.message })
    }
})

module.exports = router