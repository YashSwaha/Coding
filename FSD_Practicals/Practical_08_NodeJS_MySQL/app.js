// =============================================================================
// Practical 8: Node.js and MySQL Operations
// File: app.js
//
// PREREQUISITES & HOW TO RUN:
// 1. Install dependencies:
//      npm install
// 2. Ensure MySQL server is running (e.g. XAMPP, WampServer, or local MySQL service).
// 3. Update the DB_CONFIG object below with your MySQL credentials (user, password).
// 4. Run the script:
//      node app.js
// =============================================================================

const mysql = require('mysql2/promise');

// MySQL Connection Configuration
const DB_CONFIG = {
  host: 'localhost',
  user: 'root',      // Default XAMPP/MySQL user
  password: '',      // Enter your MySQL password if any
};

const DATABASE_NAME = 'fsd_practical_db';

// =============================================================================
// PART B: User-Defined JavaScript Functions wrapping SQL Queries
// (Defined here and invoked sequentially in main())
// =============================================================================

// User Function 1: Delete a record using parameterized query
async function deleteRecord(conn, studentName) {
  console.log(`\n[Part B.1 - JS Function: deleteRecord] Deleting student: "${studentName}"`);
  const sql = "DELETE FROM students WHERE name = ?"; // SQL Command
  const [result] = await conn.execute(sql, [studentName]);
  console.log(`Deleted rows: ${result.affectedRows}`);
}

// User Function 2: Select all records
async function selectRecords(conn) {
  console.log(`\n[Part B.2 - JS Function: selectRecords] Current records in 'students' table:`);
  const sql = "SELECT * FROM students"; // SQL Command
  const [rows] = await conn.execute(sql);
  console.table(rows);
  return rows;
}

// User Function 3: Select unique (distinct) values
async function selectUniqueValues(conn) {
  console.log(`\n[Part B.3 - JS Function: selectUniqueValues] Distinct student names:`);
  const sql = "SELECT DISTINCT name FROM students"; // SQL Command
  const [rows] = await conn.execute(sql);
  console.table(rows);
  return rows;
}

// User Function 4: Drop a table (safe demo table to preserve actual student data)
async function dropTable(conn, tableName) {
  console.log(`\n[Part B.4 - JS Function: dropTable] Explicit demonstration of dropping table: '${tableName}'`);
  const sql = `DROP TABLE IF EXISTS ${tableName}`; // SQL Command
  await conn.execute(sql);
  console.log(`Table '${tableName}' dropped successfully.`);
}

// =============================================================================
// MAIN SEQUENTIAL EXECUTION
// =============================================================================
async function run() {
  let connection;

  try {
    console.log("Connecting to MySQL server at " + DB_CONFIG.host + "...");
    // Initial connection to create database if not present
    connection = await mysql.createConnection(DB_CONFIG);
    console.log("Connected to MySQL successfully!");

    // -------------------------------------------------------------
    // PART A: Basic Operations
    // -------------------------------------------------------------

    // 1. Create a database
    console.log(`\n[Part A.1] Creating database '${DATABASE_NAME}' if not exists...`);
    await connection.execute(`CREATE DATABASE IF NOT EXISTS ${DATABASE_NAME}`);
    console.log("Database created / confirmed.");

    // Select the database for subsequent operations
    await connection.changeUser({ database: DATABASE_NAME });
    console.log(`Active database switched to '${DATABASE_NAME}'.`);

    // 2. Create a table
    console.log(`\n[Part A.2] Creating table 'students' if not exists...`);
    const createTableSQL = `
      CREATE TABLE IF NOT EXISTS students (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) NOT NULL
      )
    `;
    await connection.execute(createTableSQL);
    console.log("Table 'students' ready.");

    // 3. Insert records using parameterized queries
    console.log(`\n[Part A.3] Inserting student records using parameterized queries...`);
    const insertSQL = "INSERT INTO students (name, email) VALUES (?, ?)";
    await connection.execute(insertSQL, ['Rahul Sharma', 'rahul@example.com']);
    await connection.execute(insertSQL, ['Priya Patel', 'priya@example.com']);
    await connection.execute(insertSQL, ['Rahul Sharma', 'rahul.alternate@example.com']); // Duplicate name to test DISTINCT
    console.log("3 records inserted successfully.");

    // Display after insertion
    await selectRecords(connection);

    // 4. Update a record using parameterized query
    console.log(`\n[Part A.4] Updating record: Changing Priya Patel's email...`);
    const updateSQL = "UPDATE students SET email = ? WHERE name = ?";
    const [updateResult] = await connection.execute(updateSQL, ['priya.new@university.edu', 'Priya Patel']);
    console.log(`Updated rows: ${updateResult.affectedRows}`);

    // -------------------------------------------------------------
    // PART B: Calling User-Defined Functions
    // -------------------------------------------------------------

    // Call Function 2: Select records to show the updated data
    await selectRecords(connection);

    // Call Function 3: Select unique student names (DISTINCT)
    await selectUniqueValues(connection);

    // Call Function 1: Delete a record
    await deleteRecord(connection, 'Rahul Sharma');

    // Display records after deletion
    await selectRecords(connection);

    // Call Function 4: Safe demonstration of DROP TABLE on a temporary table
    console.log(`\nCreating temporary demo table for drop demonstration...`);
    await connection.execute("CREATE TABLE IF NOT EXISTS demo_drop_test (id INT, note VARCHAR(50))");
    await dropTable(connection, "demo_drop_test");

    console.log("\nAll Practical 8 MySQL operations executed successfully!");

  } catch (error) {
    console.error("\nMySQL Error occurred:", error.code || error.message || error);
    console.error("Tip: Ensure your MySQL server (e.g. XAMPP) is running and DB_CONFIG credentials match.");
  } finally {
    if (connection) {
      await connection.end();
      console.log("MySQL connection closed.");
    }
  }
}

// Execute the practical
run();
