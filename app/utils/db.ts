import mysql from 'mysql2/promise';

// Create a MySQL pool
const pool = mysql.createPool({
  host: 'localhost', // Replace with your host, often it's 'localhost'
  user: 'dbroot', // Replace with your database username
  password: '1234', // Replace with your database password
  database: 'next_db', // Replace with your database Name
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export default pool;
