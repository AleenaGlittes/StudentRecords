const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'records',
  waitForConnections: true,
  connectionLimit: 10,
});

module.exports = db;