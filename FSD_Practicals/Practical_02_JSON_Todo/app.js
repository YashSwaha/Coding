// Practical 2: app.js
// Purpose: Demonstrate server-side JSON task manipulation using Node.js.
// How to run: node app.js

const fs = require('fs');

console.log("=== Node.js JSON Task Manager ===");

// 1. Read existing tasks from tasks.json
const rawData = fs.readFileSync('tasks.json', 'utf-8');
const data = JSON.parse(rawData);

console.log("Original Tasks Count in Frontend category:", data.categories[0].tasks.length);

// 2. Add a new task object
const newTask = {
  id: Date.now(),
  title: "Review Practical 2 Code",
  completed: false
};
data.categories[0].tasks.push(newTask);
data.totalTasks += 1;

console.log("Added new task:", newTask.title);
console.log("Updated Categories[0] tasks list:");
console.table(data.categories[0].tasks);

// 3. Mark task completed
data.categories[0].tasks[0].completed = true;
console.log(`Task '${data.categories[0].tasks[0].title}' marked completed: true`);

console.log("\nNote: In server applications, updated JSON is written back using fs.writeFileSync.");
