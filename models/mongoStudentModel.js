const { connectMongo } = require("../config/mongo");
const { ObjectId } = require("mongodb");

const getAllStudents = async () => {
  const db = await connectMongo();

  const students = db.collection("students");

  return await students.find().toArray();
};

const createStudent = async (studentData) => {
  const db = await connectMongo();

  const students = db.collection("students");

  return await students.insertOne(studentData);
};

const updateStudent = async (id, studentData) => {
  const db = await connectMongo();

  const students = db.collection("students");

  return await students.updateOne(
    { _id: new ObjectId(id) },
    { $set: studentData },
  );
};

const deleteStudent = async (id) => {
  const db = await connectMongo();

  const students = db.collection("students");

  return await students.deleteOne({
    _id: new ObjectId(id),
  });
};

module.exports = {
  getAllStudents,
  createStudent,
  updateStudent,
  deleteStudent,
};
