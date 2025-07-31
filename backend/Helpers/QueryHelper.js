// Helpers/QueryHelper.js
module.exports = {
  insertUser: "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
  getUserByEmail : "SELECT * FROM users WHERE email = ?",
};
