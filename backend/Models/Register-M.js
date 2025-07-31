// const db = require("../Configurations/db");

// exports.createUser = ({ name, email, password }) => {
//   return new Promise((resolve, reject) => {
//     const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
//     db.query(sql, [name, email, password], (err, result) => {
//       if (err) return reject(err);
//       resolve(result);
//     });
//   });
// };


const db = require("../Configurations/db");
const queries = require("../Helpers/QueryHelper");

exports.createUser = ({ name, email, password }) => {
  return new Promise((resolve, reject) => {
    db.query(queries.insertUser, [name, email, password], (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
};
