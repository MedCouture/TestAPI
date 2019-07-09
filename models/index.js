const mysql = require('mysql');
const connection = mysql.createConnection({
    host: '127.0.0.1',
    port: '3308',
    username: 'root',
    password: 'root'
});

module.export = ()=>{
    connection.connect(function(err){
        if err {console.log(err)};
        console.log('connected as ID' + connection.threadId);
    });
}
