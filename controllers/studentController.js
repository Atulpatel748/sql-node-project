const {
  getAllStudents,
  createStudent,
  updateStudent,
  deleteStudent,
} = require("../models/studentModel");

const getStudents = (req, res) => {
  getAllStudents((err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        message: "Database error",
      });
    }

    res.json(result);
  });
};

const createStudentController = (req, res) => {
  const { name, age, course, courseId } = req.body;

  createStudent(name, age, course, courseId, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        message: "Database error",
      });
    }

    res.status(201).json({
      message: "Student created",
      studentId: result.insertId,
    });
  });
};

const updateStudentController = (req, res) => {
  const studentId = req.params.id;
  const { course } = req.body;

  updateStudent(studentId, course, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        message: "Database error",
      });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({
        message: "Student not found",
      });
    }

    res.json({
      message: "Student updated",
    });
  });
};

const deleteStudentController = (req, res) => {
  const studentId = req.params.id;

  deleteStudent(studentId, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        message: "Database error",
      });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({
        message: "Student not found",
      });
    }

    res.json({
      message: "Student deleted",
    });
  });
};

module.exports = {
  getStudents,
  createStudentController,
  updateStudentController,
  deleteStudentController,
};
