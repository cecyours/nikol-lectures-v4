// // Blocking example
// FS => File System
 const fs = require('fs');
// const data = fs.readFileSync('file.txt', 'utf-8'); // Blocking
// console.log(data);
// console.log('Next operation'); // Runs after reading completes


// // Non - Blocking
// fs.readFile('file.txt', 'utf-8', (err, data) => {
//     if (err) throw err;
//     console.log('File content:', data);
// });
// console.log('This runs before reading the file'); // Non-blocking


fs.readFile("file.txt", () => {
  console.log("File read");
});

console.log("Next");