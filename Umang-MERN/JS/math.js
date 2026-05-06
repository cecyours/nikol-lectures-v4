// ===== ALL IN ONE JS MATH PRACTICAL =====

// 1. Constants
console.log("PI:", Math.PI);
console.log("E:", Math.E);

// 2. Round, Floor, Ceil
let num = 4.7;
console.log("\nOriginal Number:", num);
console.log("Round:", Math.round(num));
console.log("Floor:", Math.floor(num));
console.log("Ceil:", Math.ceil(num));

// 3. Random Number (0 to 1)
let randomValue = Math.random();
console.log("\nRandom (0-1):", randomValue);

// 4. Random Number (1 to 10)
let random10 = Math.floor(Math.random() * 10) + 1;
console.log("Random (1-10):", random10);

// 5. Dice Simulator (1 to 6)
let dice = Math.floor(Math.random() * 6) + 1;
console.log("\nDice Number:", dice);

// 6. OTP Generator (4 digit)
let otp = Math.floor(1000 + Math.random() * 9000);
console.log("OTP:", otp);

// 7. Circle Area using PI
let radius = 5;
let area = Math.PI * radius * radius;
console.log("\nCircle Area:", area);

// 8. Power & Square Root
console.log("\nSquare (4^2):", Math.pow(4, 2));
console.log("Square Root (16):", Math.sqrt(16));

// 9. Max & Min
console.log("\nMax:", Math.max(10, 25, 5));
console.log("Min:", Math.min(10, 25, 5));

// 10. Absolute Value
console.log("\nAbsolute (-50):", Math.abs(-50));