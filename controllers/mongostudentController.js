const {
  getAllStudents,
  createStudent,
  updateStudent,
  deleteStudent,
} = require("../models/mongoStudentModel");

const getMongoStudents = async (req, res) => {
  try {
    const students = await getAllStudents();

    res.json(students);
  } catch (err) {
    console.log(err);

    res.status(500).json({
      message: "Database error",
    });
  }
};

const createMongoStudent = async (req, res) => {
  try {
    const result = await createStudent(req.body);

    res.status(201).json({
      message: "Student created",
      studentId: result.insertedId,
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      message: "Database error",
    });
  }
};

const updateMongoStudent = async (req, res) => {
  try {
    const result = await updateStudent(req.params.id, req.body);

    res.json({
      message: "Student updated",
      matched: result.matchedCount,
      modified: result.modifiedCount,
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      message: "Database error",
    });
  }
};

const deleteMongoStudent = async (req, res) => {
  try {
    const result = await deleteStudent(req.params.id);

    res.json({
      message: "Student deleted",
      deleted: result.deletedCount,
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      message: "Database error",
    });
  }
};

module.exports = {
  getMongoStudents,
  createMongoStudent,
  updateMongoStudent,
  deleteMongoStudent,
};
