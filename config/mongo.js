const { MongoClient } = require("mongodb");
const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);

async function connectMongo() {
  try {
    await client.connect();
    console.log("MongoDB Connected!");

    const db = client.db("student_management");

    return db;
  } catch (err) {
    console.log("MongoDB Connection Failed:", err.message);
  }
}

module.exports = {
  connectMongo,
};
