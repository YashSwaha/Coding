// Practical 2: script.js
// Purpose: JSON creation, reading tasks.json, and multidimensional JSON array access.
// How to run: node script.js

const fs = require('fs');

console.log("=== 1. Create and Print a JSON Object in Node.js ===");
const user = {
  id: 101,
  name: "John Doe",
  course: "Full Stack Development",
  skills: ["HTML", "CSS", "JavaScript"]
};
// Convert to string representation and print
console.log("User Object as JSON string:");
console.log(JSON.stringify(user, null, 2));

console.log("\n=== 2. Read and Display tasks.json Using Node.js ===");
// Read file synchronously from disk
const rawData = fs.readFileSync('tasks.json', 'utf-8');
// Parse JSON string back into JavaScript object
const taskData = JSON.parse(rawData);
console.log("Loaded Project Name:", taskData.project);
console.log("Total Categories:", taskData.categories.length);

console.log("\n=== 3. Multidimensional JSON Array Demonstration ===");
// Multidimensional array: 2D array of student grades by subject
const timetableMatrix = [
  ["Monday", ["FSD Lab", "Operating Systems"]],
  ["Tuesday", ["Database Management", "Computer Networks"]],
  ["Wednesday", ["Web Technologies", "Software Engineering"]]
];

console.log("Full Timetable Matrix:", timetableMatrix);

// Accessing individual elements in multidimensional array
console.log("Day 1 Name [0][0]:", timetableMatrix[0][0]); // Monday
console.log("Day 1 First Subject [0][1][0]:", timetableMatrix[0][1][0]); // FSD Lab
console.log("Day 2 Second Subject [1][1][1]:", timetableMatrix[1][1][1]); // Computer Networks

// Accessing nested elements from tasks.json multidimensional object array
console.log("\nAccessing nested data from tasks.json:");
const firstCategory = taskData.categories[0].categoryName;
const firstTaskInFirstCategory = taskData.categories[0].tasks[0].title;
console.log(`First Category: ${firstCategory}`);
console.log(`First Task: ${firstTaskInFirstCategory}`);
