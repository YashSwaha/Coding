// Practical 1: app.js
// Purpose: Create a JSON object and store it in a local JSON file.
// How to run: node app.js

const fs = require('fs');

// 5. Example of identifying application title for practicals
const APP_TITLE = "FSD Practical 01: Application Config";

// 4. Create a JSON object
const applicationData = {
  title: APP_TITLE,
  subject: "Full Stack Development",
  practicalNumber: 1,
  createdAt: new Date().toISOString()
};

// Convert object to formatted JSON string
const jsonData = JSON.stringify(applicationData, null, 2);

// Store JSON data into a local file 'app_data.json'
fs.writeFileSync('app_data.json', jsonData, 'utf-8');

console.log("Application Title:", APP_TITLE);
console.log("JSON object successfully written to app_data.json:");
console.log(jsonData);
