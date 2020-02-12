
const mysql = require('promise-mysql');
const dbConnectionOptions = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  connectionLimit: 10,
};
const pool = mysql.createPool(dbConnectionOptions);

const sqlConnection = () => pool.getConnection().disposer((connection) => {
  pool.releaseConnection(connection);
});

module.exports = sqlConnection;
