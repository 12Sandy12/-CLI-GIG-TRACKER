const mysql = require('mysql2');

// Create the connection object
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'rootuser', // Use your password here
  database: 'HustleDB'
});






const readline = require('readline');
const fs = require('fs'); 

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("--- The NYC Hustle Tracker ---");

function mainMenu() {
  // Updated instruction to include 'd'
  rl.question("\nWhat would you like to do? (h: History, n: New, d: Delete, q: Quit): ", (choice) => {
    
    const userChoice = choice.toLowerCase();

    if (userChoice === 'h') {
      fs.readFile('history.txt', 'utf8', (err, data) => {
        if (err || data.length === 0) {
          console.log("No history found yet!");
        } else {
          console.log("\n--- Your Past Shifts ---");
          console.log(data);
        }
        mainMenu(); 
      });

    } else if (userChoice === 'n') {
      rl.question("How many miles did you ride today? ", (miles) => {
        rl.question("How much did you earn today? $", (earnings) => {
          
          const numMiles = parseFloat(miles);
          const numEarnings = parseFloat(earnings);
          const perMile = numEarnings / numMiles;
          
          console.log(`\nAwesome job! You made $${perMile.toFixed(2)} per mile today.`);

          // --- DAY 2 UPGRADE: SQL INSERT ---
          // The '?' are placeholders that prevent SQL Injection (Security!)
          const sql = "INSERT INTO shifts (miles_driven, total_earned, pay_per_mile) VALUES (?, ?, ?)";
          const values = [numMiles, numEarnings, perMile];

          db.query(sql, values, (err, result) => {
            if (err) {
              console.error("❌ SQL Error: " + err.message);
            } else {
              console.log("✅ Success! Shift saved to database (ID: " + result.insertId + ")");
            }
            // Always call the menu again to keep the app running
            mainMenu(); 
          });
        });
      });

    // --- NEW: PATH 3 - DELETE HISTORY ---
    } else if (userChoice === 'd') {
      rl.question("Are you sure you want to wipe all history? (y/n): ", (confirm) => {
        if (confirm.toLowerCase() === 'y') {
          // Writing an empty string '' effectively deletes the file content
          fs.writeFile('history.txt', '', (err) => {
            if (err) console.log("Could not delete history.");
            else console.log("History wiped clean!");
            mainMenu();
          });
        } else {
          console.log("Delete cancelled.");
          mainMenu();
        }
      });

    } else if (userChoice === 'q') {
      console.log("See you next time! Drive safe out there.");
      rl.close();

    } else {
      console.log("I didn't understand. Please use h, n, d, or q.");
      mainMenu();
    }
  });
}

mainMenu();