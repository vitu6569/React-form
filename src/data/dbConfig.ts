import mysql from 'mysql2'

// dbConfig.ts
export const dbConfig = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'usuarios',
    port: "port"
});
