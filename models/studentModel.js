const connection = require("../config/db");

const getAllStudents = (callback) => {
  connection.query("SELECT * FROM students", callback);
};

const getStudentById = (studentId, callback) => {
  connection.query(
    "SELECT * FROM students WHERE id = ?",
    [studentId],
    callback,
  );
};

const createStudent = (name, age, course, courseId, callback) => {
  connection.query(
    "INSERT INTO students (name, age, course, course_id) VALUES (?, ?, ?, ?)",
    [name, age, course, courseId],
    callback,
  );
};

const updateStudent = (studentId, newCourse, callback) => {
  connection.query(
    "UPDATE students SET course = ? WHERE id = ?",
    [newCourse, studentId],
    callback
  );
};

const deleteStudent = (studentId, callback) => {
  connection.query(
    "DELETE FROM students WHERE id = ?",
    [studentId],
    callback
  );
};

module.exports = {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
};
