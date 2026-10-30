import mysql2 from "mysql2/promise";

const db = mysql2.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER ,
  password: process.env.DB_PASSWARD,
  database: process.env.DB_DATABASE,
});

console.log({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER,
  password: process.env.DB_PASSWARD,
  database: process.env.DB_DATABASE,
});

export default db;
