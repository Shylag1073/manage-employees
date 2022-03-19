const mysql = require("mysql2");
require('dotenv').config()
const db = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      user: 'root',
      // Your MySQL password
      password:process.env.SQLPASSWORD,
      database: 'SHYLA'
    },
    console.log('Connected to the SHYLA database.')

  );

  db.connect(function(err){
      if (err) throw err
      });