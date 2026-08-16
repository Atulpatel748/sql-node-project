const express = require("express");
const {
  getMongoStudents,
  createMongoStudent,
  updateMongoStudent,
  deleteMongoStudent,
} = require("../controllers/mongoStudentController");


const router = express.Router();

router.get("/mongo/students", getMongoStudents);
router.post("/mongo/students", createMongoStudent);
router.put("/mongo/students/:id", updateMongoStudent);
router.delete("/mongo/students/:id", deleteMongoStudent);

module.exports = router;
