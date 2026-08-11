const {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
} = require("./models/studentModel");

// // ----------------Get all students----------------------------

// getAllStudents((err, result) => {
//   if (err) {
//     console.log(err);
//     return;
//   }

//   console.log(result);
// });

// //----------------Get a student by ID-------------------------

// const studentId = 1;
// getStudentById(studentId, (err, result) => {
//   if (err) {
//     console.log(err);
//     return;
//   }

//   console.log(result);
// });

// // -----------------Create a new student-----------------------

// createStudent("Rahul", 21, "Node.js", 2, (err, result) => {
//   if (err) {
//     console.log(err);
//     return;
//   }

//   console.log(result);
// });

// // -----------------Update a student's course------------------

// const studentId = 7;
// const newCourse = "Express";

// updateStudent(studentId, newCourse, (err, result) => {
//   if (err) {
//     console.log(err);
//     return;
//   }

//   console.log(result);
// });

// -----------------Delete a student------------------

// const studentId = 8;

// deleteStudent(studentId, (err, result) => {
//   if (err) {
//     console.log(err);
//     return;
//   }

//   console.log(result);
// });
