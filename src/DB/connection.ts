import mysql from 'mysql2';
import 'dotenv/config'

//@ts-ignore
const myDB = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
});

export { myDB };
