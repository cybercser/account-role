const config = require("../config");
const mysql = require("mysql");

const pool = mysql.createPool({
  host     : config.host,
  port     : config.port,
  user     : config.user,
  password : config.password,
  database : config.database
});

let query = function(sql, values) {

  return new Promise((resolve, reject) => {
    pool.getConnection(function(err, connection) {
      if (err) {
        console.log(`[ERROR] ${err}`);
        resolve(err);
      } else {
        connection.query(sql, values, (err, rows) => {
          if (err) {
            console.log(`[ERROR] ${err}`);
            reject(err);
          } else {
            resolve(rows);
          }
          connection.release();
        });
      }
    });
  }).then(function (rows) {
    return rows;
  }).catch((err) => setImmediate(() => {
    throw err;
  }));

};

module.exports = {
  query
};
