import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { nanoid } from "nanoid";

import { tasks } from './data.js';
const app = express();

let tasksArray = tasks; // Use a mutable array for tasks

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.send('hello');
});

app.get('/api/tasks', (req, res) => {
    res.json({ tasks: tasksArray }); // Return tasksArray instead of tasks
});

app.post('/api/tasks', (req, res) => {
    const { title } = req.body;
    console.log('title', title);
    if (!title) {
        res.status(400).json({ msg: 'Please provide title' });
    }

    const newTask = { id: nanoid(), title, isDone: false };
    tasksArray.push(newTask); // Push newTask to tasksArray
    res.json({ task: newTask });
});

app.patch('/api/tasks/:id', (req, res) => {
    const { id } = req.params;
    const { isDone } = req.body;
    tasksArray = tasksArray.map((item) => {
        if (item.id === id) {
            return { ...item, isDone };
        }
        return item;
    });
    res.json({ msg: 'task updated' });
});

const port = process.env.PORT || 5000;

const startApp = () => {
    try {
        app.listen(port, () => {
            console.log(`sever is running on port ${port}`)
        });
    } catch (error) { }
}

startApp();
