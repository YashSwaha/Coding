// =============================================================================
// Practical 10: Node.js and MongoDB CRUD Operations
// File: app.js
//
// PREREQUISITES & HOW TO RUN:
// 1. Install dependencies:
//      npm install
// 2. Start local MongoDB (mongod) OR prepare a MongoDB Atlas connection string.
// 3. Run the script:
//      node app.js
// =============================================================================

const { MongoClient } = require('mongodb');

// Connection URI:
// - For local MongoDB: "mongodb://127.0.0.1:27017"
// - For MongoDB Atlas: "mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority"
const URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017";
const DB_NAME = "fsd_lab_db";
const COLLECTION_NAME = "students";

async function runCRUD() {
  const client = new MongoClient(URI);

  try {
    // 1. Connect to MongoDB Server
    console.log(`Connecting to MongoDB at: ${URI}...`);
    await client.connect();
    console.log("Connected to MongoDB successfully!\n");

    const db = client.db(DB_NAME);
    const students = db.collection(COLLECTION_NAME);

    // Optional: Clean up existing test data from previous runs
    await students.deleteMany({ rollNo: { $in: ["CS101", "CS102"] } });

    // -------------------------------------------------------------
    // 2. CREATE: Insert Students
    // -------------------------------------------------------------
    console.log("=== 1. CREATE Operation: Inserting Students ===");
    const student1 = { name: "Aarav Sharma", rollNo: "CS101", email: "aarav@example.com" };
    const student2 = { name: "Neha Verma", rollNo: "CS102", email: "neha@example.com" };

    const insertResult1 = await students.insertOne(student1);
    const insertResult2 = await students.insertOne(student2);
    console.log(`Inserted Student 1 with ID: ${insertResult1.insertedId}`);
    console.log(`Inserted Student 2 with ID: ${insertResult2.insertedId}`);

    // -------------------------------------------------------------
    // 3. READ: Find and Display Students
    // -------------------------------------------------------------
    console.log("\n=== 2. READ Operation: Fetching All Students ===");
    let studentList = await students.find({}).toArray();
    console.table(studentList);

    // -------------------------------------------------------------
    // 4. UPDATE: Update Student Record
    // -------------------------------------------------------------
    console.log("\n=== 3. UPDATE Operation: Updating Aarav's Email ===");
    const updateResult = await students.updateOne(
      { rollNo: "CS101" }, // Filter
      { $set: { email: "aarav.sharma@university.edu" } } // Update field
    );
    console.log(`Matched documents: ${updateResult.matchedCount}, Modified: ${updateResult.modifiedCount}`);

    // Display after update
    studentList = await students.find({}).toArray();
    console.table(studentList);

    // -------------------------------------------------------------
    // 5. DELETE: Remove Student Record
    // -------------------------------------------------------------
    console.log("\n=== 4. DELETE Operation: Deleting Student Neha (CS102) ===");
    const deleteResult = await students.deleteOne({ rollNo: "CS102" });
    console.log(`Deleted documents count: ${deleteResult.deletedCount}`);

    // Display final collection state
    console.log("\nFinal records in 'students' collection:");
    studentList = await students.find({}).toArray();
    console.table(studentList);

    console.log("\nAll MongoDB CRUD operations completed successfully!");

  } catch (error) {
    console.error("\nMongoDB Error occurred:", error.message);
    console.error("\nTroubleshooting Tips:");
    console.error("1. For Local MongoDB: Ensure 'mongod' or MongoDB service is started.");
    console.error("2. For MongoDB Atlas: Set environment variable MONGODB_URI or edit the URI in app.js.");
    console.error("   Example: export MONGODB_URI='mongodb+srv://user:pass@cluster.mongodb.net/?retryWrites=true'");
  } finally {
    // 6. Close database connection
    await client.close();
    console.log("MongoDB connection closed.");
  }
}

// Execute CRUD operations
runCRUD();
