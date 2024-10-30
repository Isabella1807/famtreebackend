import mysql from 'mysql2';

const mysqlDB = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "famtree"
});

export default mysqlDB;