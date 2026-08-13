const express = require("express");
const {
  getStudents,
  createStudentController,
  updateStudentController,
  deleteStudentController,
} = require("../controllers/studentController");

const router = express.Router();

router.get("/students", getStudents);
router.post("/students", createStudentController);
router.put("/students/:id", updateStudentController);
router.delete("/students/:id", deleteStudentController);

module.exports = router;
