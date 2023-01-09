const mysql = require("mysql2/promise");
const databaseEnvironemnt = require("./database");

const env = "development";
const config = databaseEnvironemnt[env];

const pool = mysql.createPool({
  host: config.host,
  user: config.username,
  password: config.password,
  database: config.database,
  waitForConnections: true,
  namedPlaceholders: true,
  connectionLimit: 10,
  queueLimit: 0,
});

async function query(sql, params) {
  //const {row, field}
  const [rows] = await pool.execute(sql, params);

  return rows;
}

module.exports = {
  query,
};
