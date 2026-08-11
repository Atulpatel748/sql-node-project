const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "@Akanat_160107",
  database: "student_management",
});

connection.connect((err) => {
  if (err) {
    console.log("Connection failed:", err.message);
    return;
  }

  console.log("MySQL Connected!");

  // --------SELECT a student record------------

  const studentId = 2;

  connection.query(
    "SELECT * FROM students WHERE id = ?",
    [studentId],
    (err, result) => {
      if (err) {
        console.log(err);
        return;
      }

      console.log(result);
    },
  );

  //  -------------INSERT student record---------------

  const studentName = "John";
  const studentAge = 23;
  const studentCourse = "Node.js";
  const courseId = 2;

  connection.query(
    "INSERT INTO students (name, age, course, course_id) VALUES (?, ?, ?, ?)",
    [studentName, studentAge, studentCourse, courseId],
    (err, result) => {
      if (err) {
        console.log(err);
        return;
      }

      console.log(result);
    },
  );

  // ---------------UPDATE a student record-------------

  // const studentId = 5;
  const newCourse = "Express";

  connection.query(
    "UPDATE students SET course = ? WHERE id = ?",
    [newCourse, studentId],
    (err, result) => {
      if (err) {
        console.log(err);
        return;
      }

      console.log(result);
    },
  );

  // --------DELETE a student record--------

  // const studentId = 5;

  connection.query(
    "DELETE FROM students WHERE id = ?",
    [studentId],
    (err, result) => {
      if (err) {
        console.log(err);
        return;
      }

      console.log(result);
    },
  );

  connection.end();
});
