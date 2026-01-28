const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

// Serve frontend
app.use(express.static(path.join(__dirname, "public")));

// In-memory storage
let courses = [];
let students = [];
let enrollments = [];

/* -------- COURSES -------- */
app.post("/courses", (req, res) => {
  const course = {
    id: courses.length + 1,
    name: req.body.name
  };
  courses.push(course);
  res.json(course);
});

app.get("/courses", (req, res) => {
  res.json(courses);
});

/* -------- STUDENTS -------- */
app.post("/students", (req, res) => {
  const student = {
    id: students.length + 1,
    name: req.body.name
  };
  students.push(student);
  res.json(student);
});

/* -------- ASSIGN -------- */
app.post("/assign", (req, res) => {
  enrollments.push(req.body);
  res.json({ message: "Course assigned" });
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
