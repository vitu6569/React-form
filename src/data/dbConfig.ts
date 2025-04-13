import mysql from 'mysql2'

// dbConfig.ts
export const dbConfig = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Jv310133',
    database: 'usuarios',
    port:3306
});