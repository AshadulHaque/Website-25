const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// In-memory data storage
let students = [];
let teachers = [];
let classes = [];

// API endpoints
app.get('/api/students', (req, res) => res.json(students));
app.post('/api/students', (req, res) => {
    const student = req.body;
    students.push(student);
    res.status(201).json(student);
});

app.get('/api/teachers', (req, res) => res.json(teachers));
app.post('/api/teachers', (req, res) => {
    const teacher = req.body;
    teachers.push(teacher);
    res.status(201).json(teacher);
});

app.get('/api/classes', (req, res) => res.json(classes));
app.post('/api/classes', (req, res) => {
    const classObj = req.body;
    classes.push(classObj);
    res.status(201).json(classObj);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
