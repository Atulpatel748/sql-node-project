const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "@Akanat_160107",
  database: "student_management",
});

module.exports = connection;
