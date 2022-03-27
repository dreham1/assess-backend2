const express = require("express");
const cors = require("cors");
const { getFortune , getCompliment} = require('./contoller/fortunecontroller.js')

const { getStudents, addStudent, updateStudent, deleteStudent } = require('./contoller/studentController')

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", getCompliment);

app.get("/api/fortune", getFortune);

app.post('/api/students', addStudent);

app.put('api/students/:id', updateStudent);

app.delete('/api/students/:id', deleteStudent)

app.listen(4000, () => console.log("Server running on 4000"));
