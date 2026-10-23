-- =============================================================
-- Practical 8: Node.js and MySQL Database Script
-- File: database.sql
-- =============================================================

-- Step 1: Create Database
CREATE DATABASE IF NOT EXISTS fsd_practical_db;

-- Step 2: Select the Database
USE fsd_practical_db;

-- Step 3: Create 'students' Table
CREATE TABLE IF NOT EXISTS students (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL
);

-- Step 4: Sample Data (Optional manual insert)
INSERT INTO students (name, email) VALUES
('Alice Smith', 'alice@example.com'),
('Bob Johnson', 'bob@example.com'),
('Alice Smith', 'alice.smith@university.edu');

-- Step 5: Temporary table for demonstrating DROP TABLE safely
CREATE TABLE IF NOT EXISTS demo_drop_test (
  id INT AUTO_INCREMENT PRIMARY KEY,
  note VARCHAR(100)
);
