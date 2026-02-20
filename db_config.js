const mysql = require('mysql2');

// This creates the connection to your local MySQL server
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',     // This is usually 'root' for MySQL Workbench
  password: 'YOUR_PASSWORD_HERE', // Put your MySQL Workbench password here!
  database: 'HustleDB'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database: ' + err.stack);
    return;
  }
  console.log('Successfully connected to HustleDB as id ' + connection.threadId);
});

module.exports = connection;