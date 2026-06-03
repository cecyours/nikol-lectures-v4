// app.js
const fs = require('fs');
// Create a file
fs.writeFileSync('example.txt', 'Hello, Node.js!');
// Read a file
const data = fs.readFileSync('example.txt', 'utf-8');
console.log(data);
