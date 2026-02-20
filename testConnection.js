const mysql = require('mysql2');

// 1. Create the connection 'address'
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'rootuser', // <-- Change this!
  database: 'HustleDB'
});

// 2. Try to open the door
connection.connect((err) => {
  if (err) {
    console.error('❌ Connection failed! Error: ' + err.message);
    return;
  }
  console.log('✅ Success! Your JavaScript is talking to your MySQL Server.');
  
  // Close it for now so the program exits
  connection.end();
});