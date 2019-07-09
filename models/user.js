const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    port: '3307',
    username: 'root',
    password: 'root'
});

connection.connect(function(err){
    if err throw err;
    console.log('connected as ID' + connection.threadId);
});