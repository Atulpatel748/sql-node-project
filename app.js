const express = require("express");
const studentRoutes = require("./routes/studentRoutes");
const { connectMongo } = require("./config/mongo");
const mongoStudentRoutes = require("./routes/mongoStudentRoutes");

const app = express();

connectMongo().then(async (db) => {
  const students = db.collection("students");

  const result = await students.insertOne({
    name: "Ravi",
    age: 24,
    course: "Node.js",
  });
  console.log("Inserted ID:", result.insertedId);

  const allStudents = await students.find().toArray();
  console.log("All Students:", allStudents);

  const updateResult = await students.updateOne(
    { name: "Ravi" },
    { $set: { course: "Express" } },
  );
  console.log(
    "Matched:",
    updateResult.matchedCount,
    "Modified:",
    updateResult.modifiedCount,
  );

  const deleteResult = await students.deleteOne({
    name: "Ravi",
  });

  console.log("Deleted:", deleteResult.deletedCount);
});

app.use(express.json());
app.use(studentRoutes);
app.use(studentRoutes);
app.use(mongoStudentRoutes);

app.get("/", (req, res) => {
  res.send("SQL + Node.js API");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
