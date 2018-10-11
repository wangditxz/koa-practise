const Koa = require('koa');

const mysql = require('mysql2');
const db_config = {
    host: 'localhost',
    user: 'root',
    password: 'rootroot',
    database:  'mydatabase'
};
const connection = mysql.createConnection(db_config);

connection.connect(err => {
    if (err) {
        console.log('database connect fail, error:', err);
        return;
    }
    console.log('database connect success');
});

const queryExpression1 = 'SELECT * FROM WEBSITES';

connection.query(queryExpression1, function(err, res) {
    if (err) {
        throw err;
    }
});
connection.end();




const app = new Koa();


app.listen('3001');

console.log('start at port 3001 ...');